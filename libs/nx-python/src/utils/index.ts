/* eslint-disable import/prefer-default-export */

import { ExecutorContext, logger } from '@nrwl/devkit';
import { execSync } from 'child_process';
import { CommandType } from '..';

export function runPythonCommand(
  context: ExecutorContext,
  command: CommandType,
  params: string[],
  options: { cwd?: string; cmd?: string } = {}
): { success: boolean } {
  const cmd = options.cmd || 'python3';
  const cwd = options.cwd || process.cwd();

  const execute = `${cmd} ${command} ${params.join('')}`;

  try {
    logger.info(`Executing command: ${execute}`);
    execSync(execute, { cwd, stdio: [0, 1, 2] });
    return { success: true };
  } catch (e) {
    logger.error(`Failed to execute comand: ${execute}`);
    // eslint-disable-next-line no-console
    console.error(e);
    return { success: false };
  }
}
