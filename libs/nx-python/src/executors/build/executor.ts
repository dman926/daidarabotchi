/* eslint-disable no-console */

import { ExecutorContext, logger } from '@nrwl/devkit';
import { runPythonCommand, getVenvBin } from '../../utils';
// There's a fake eslint error here
// eslint-disable-next-line import/extensions
import { BuildExecutorSchema } from './schema';

export default async function runExecutor(
  options: BuildExecutorSchema,
  context: ExecutorContext
) {
  const venvBin = getVenvBin(context);
  if (!venvBin) {
    logger.fatal("Error finding the project's environment bin folder");
    return { success: false };
  }
  let output;

  output = runPythonCommand('-m pipenv-setup sync', {
    cmd: `${venvBin}/python3`,
  });

  if (!output.success) {
    return { success: false };
  }

  output = runPythonCommand(
    `${options.setup} sdist bdist_wheel --dist-dir ${options.outputPath}`
  );

  return {
    success: output.success,
  };
}
