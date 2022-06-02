/* eslint-disable no-console */

import { ExecutorContext } from '@nrwl/devkit';
import type { FileInputOutput } from '@nrwl/workspace/src/utilities/assets';
import { join } from 'path';
import { runPythonCommand } from '../../utils/py-utils';
import { NormalizedExecutorOptions } from '../../utils/schema';
// There's a fake eslint error here
// eslint-disable-next-line import/extensions
import { BuildExecutorSchema } from './schema';

export function normalizeOptions(
  options: BuildExecutorSchema,
  contextRoot: string,
  sourceRoot?: string,
  projectRoot?: string
): NormalizedExecutorOptions<BuildExecutorSchema> {
  const outputPath = join(contextRoot, options.outputPath);

  if (options.watch == null) {
    options.watch = false;
  }

  const files: FileInputOutput[] = assetGlobsToFiles(
    options.assets,
    contextRoot,
    outputPath
  );

  return {
    ...options,
    root: contextRoot,
    sourceRoot,
    projectRoot,
    files,
    tsConfig: join(contextRoot, options.tsConfig),
    mainOutputPath: resolve(
      outputPath,
      options.main.replace(`${projectRoot}/`, '').replace('.ts', '.js')
    ),
  };
}

export default async function runExecutor(
  options: BuildExecutorSchema,
  context: ExecutorContext
) {
  const projectRoot = context.workspace.projects[context.projectName].root;
  runPythonCommand(context, 'build', [mainFile], getCliOptions(options));

  return {
    success: true,
  };
}
