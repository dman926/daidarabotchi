/* eslint-disable no-console */

import { ExecutorContext, logger,  } from '@nrwl/devkit';
import { ChildProcess, execSync } from 'child_process';
import { runPythonCommand } from '../../utils/py-utils';
// There's a fake eslint error here
// eslint-disable-next-line import/extensions
import { BuildExecutorSchema } from './schema';

let childProcess: ChildProcess;

const runBuild = (
  workspaceRoot: string,
  projectRoot: string
) =>
  new Promise((resolve, reject) => {
    childProcess = runPythonCommand(`python3 setup.py sdist bdist_wheel`, workspaceRoot, projectRoot);

    process.on('exit', () => childProcess.kill());
    process.on('SIGTERM', () => childProcess.kill());

    childProcess.on('error', (err) => {
      reject(err);
    });
    childProcess.on('exit', (code) => {
      if (code === 0) {
        resolve(code);
      } else {
        reject(code);
      }
    });
  });

export default async function runExecutor(
  options: BuildExecutorSchema,
  context: ExecutorContext
) {
  const projectRoot = context.workspace.projects[context.projectName].root;
  try {
    await runBuild(context.root, projectRoot);
    return { sucess: true };
  } catch (e) {
    logger.error(`Error: ${e}`);
    return { sucess: false };
  } finally {
    childProcess?.kill();
  }
}
