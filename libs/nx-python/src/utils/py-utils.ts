import { ExecutorContext, logger } from '@nrwl/devkit';
import { execSync } from 'child_process';
// eslint-disable-next-line import/extensions
import { ServeExecutorSchema } from '../executors/serve/schema';
import { CommandType } from '..';
import { getCorePythonExecuteCommand } from './command';

export function runPythonCommand(
  context: ExecutorContext,
  command: CommandType,
  params: string[],
  options: ServeExecutorSchema = {}
): { success: boolean } {
  // Take the parameters or set defaults
  const cmd = options.cmd || 'python3';

  const execute = getCorePythonExecuteCommand(cmd, command, params);
  try {
    logger.info(`Executing command: ${execute}`);

    return { success: true };
  } catch (e) {
    logger.error(`Failed to execute command: ${execute} ${e}`);
    return { success: false };
  }
}

export function getCliOptions(
  options: ServeExecutorSchema
): ServeExecutorSchema {
  const newOptions: ServeExecutorSchema = { ...options };
  if (options.cmd) {
    newOptions.cmd = options.cmd;
  }
  return newOptions;
}
