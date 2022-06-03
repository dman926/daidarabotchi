/* eslint-disable import/prefer-default-export */

import { logger } from '@nrwl/devkit';
import { ChildProcess, spawn } from 'child_process';
import { join } from 'path';

export function runPythonCommand(
  cmd: string,
  workspaceRoot: string,
  projectRoot: string
): ChildProcess | undefined {
  const splitCmd = cmd.match(/"[^"]+"|'[^']+'|\S+/g)
  if (splitCmd[0] !== 'python3' && splitCmd[0] !== 'pip3') {
    logger.error(`Invalid command: ${splitCmd[0]}`)
    return undefined;
  }
  try {
    logger.info(`Executing command: ${cmd}`);
    return spawn(splitCmd[0], splitCmd.slice(1), {
      cwd: join(workspaceRoot, projectRoot),
      stdio: [0, 1, 2],
    });
  } catch (e) {
    logger.error(`Failed to execute command: ${cmd} ${e}`);
  }
  return undefined;
}
