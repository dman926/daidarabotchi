/* eslint-disable import/prefer-default-export */

import { ExecutorContext, logger } from '@nrwl/devkit';
import { execSync } from 'child_process';

export function runPythonCommand(
  command: string,
  options: { cwd?: string; cmd?: string } = {}
): { success: boolean; stdio?: Buffer } {
  const cmd = options.cmd || 'python3';
  const cwd = options.cwd || process.cwd();

  const execute = `${cmd} ${command}`;

  try {
    logger.info(`Executing command: ${execute}`);
    const stdio = execSync(execute, { cwd, stdio: [0, 1, 2] });
    return { success: true, stdio };
  } catch (e) {
    logger.error(`Failed to execute comand: ${execute}`);
    // eslint-disable-next-line no-console
    console.error(e);
    return { success: false };
  }
}

export function getVenvBin(context: ExecutorContext) {
  const cwd = context.workspace.projects[context.projectName].root;
  try {
    const bin = `${runPythonCommand('-m pipenv --venv', { cwd })}/bin`;
    return bin;
  } catch (e) {
    return undefined;
  }
}
