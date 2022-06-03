/* eslint-disable no-console */

import { ExecutorContext } from '@nrwl/devkit';
import { runPythonCommand } from '../../utils';
// There's a fake eslint error here
// eslint-disable-next-line import/extensions
import { BuildExecutorSchema } from './schema';

export default async function runExecutor(
  options: BuildExecutorSchema,
  context: ExecutorContext
) {
  return runPythonCommand(context, 'build', [
    'setup.py',
    'sdist',
    'bdist_wheel',
    '--dist-dir',
    options.outputPath,
  ]);
}
