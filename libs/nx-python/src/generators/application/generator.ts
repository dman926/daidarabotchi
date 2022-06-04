import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  getWorkspaceLayout,
  names,
  offsetFromRoot,
  Tree,
  logger,
} from '@nrwl/devkit';
import * as path from 'path';
import { platform } from 'os';
import { execSync } from 'child_process';
// eslint-disable-next-line import/extensions
import { NxPythonGeneratorSchema } from './schema';

interface NormalizedSchema extends NxPythonGeneratorSchema {
  projectName: string;
  projectRoot: string;
  projectDirectory: string;
  parsedTags: string[];
}

function normalizeOptions(
  tree: Tree,
  options: NxPythonGeneratorSchema
): NormalizedSchema {
  const name = names(options.name).fileName;
  const projectDirectory = options.directory
    ? `${names(options.directory).fileName}/${name}`
    : name;
  const projectName = projectDirectory.replace(/\//g, '-');
  const projectRoot = `${getWorkspaceLayout(tree).libsDir}/${projectDirectory}`;
  const parsedTags = options.tags
    ? options.tags.split(',').map((s) => s.trim())
    : [];

  return {
    ...options,
    projectName,
    projectRoot,
    projectDirectory,
    parsedTags,
  };
}

function addFiles(tree: Tree, options: NormalizedSchema) {
  const templateOptions = {
    ...options,
    ...names(options.name),
    offsetFromRoot: offsetFromRoot(options.projectRoot),
    template: '',
  };
  generateFiles(
    tree,
    path.join(__dirname, 'files'),
    options.projectRoot,
    templateOptions
  );
}

// eslint-disable-next-line func-names
export default async function (tree: Tree, options: NxPythonGeneratorSchema) {
  // See if pipenv, setuptools, wheel, and watchman (if they want a type checker) are installed
  const exitFlag = {
    soft: false,
    hard: false,
  };
  const isWin = platform().indexOf('win') > -1;
  const where = isWin ? 'where' : 'whereis';
  const cmds = [];
  if (options.typeChecker !== 'none') {
    cmds.push('watchman');
  }
  cmds.forEach((cmd) => {
    try {
      execSync(`${where} ${cmd}`);
    } catch (e) {
      logger.warn(`${cmd} missing from PATH`);
      exitFlag.soft = true;
      exitFlag.hard = true;
    }
  });
  if (exitFlag.soft) {
    logger.error(
      'Please install the above programs with your OS package manager'
    );
    exitFlag.soft = false;
  }
  ['setuptools', 'wheel', 'pipenv'].forEach((cmd) => {
    try {
      execSync(`python3 -c "import ${cmd}"`);
    } catch (e) {
      logger.warn(`${cmd} not in python environment`);
      exitFlag.soft = true;
      exitFlag.hard = true;
    }
  });
  if (exitFlag.soft) {
    logger.error('Please install the above packages with pip');
  }
  if (exitFlag.hard) {
    return { success: false };
  }
  const normalizedOptions = normalizeOptions(tree, options);
  addProjectConfiguration(tree, normalizedOptions.projectName, {
    root: normalizedOptions.projectRoot,
    projectType: 'application',
    sourceRoot: `${normalizedOptions.projectRoot}/src`,
    targets: {
      build: {
        executor: '@daidarabotchi/nx-python:build',
      },
      // Add the rest of the targets
    },
    tags: normalizedOptions.parsedTags,
  });
  addFiles(tree, normalizedOptions);
  // ABSTRACT THIS TO AN EXECUTOR!
  // pipenv install frequently used dependencies (pipenv-setup [DEV]) (auto creates environment)
  // pipenv install a code formatter (nothing, black, autopep8) (DEV) (optional)
  // pipenv install a test runner (nothing for unittest, robot, pytest) (DEV) (optional)
  // pipenv install a type checker (mypi, pyright, pytype, pyre) (DEV) (optional)
  // Generate requirements
  await formatFiles(tree);
  return { success: true };
}
