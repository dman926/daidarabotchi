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

export function runPipenvCommand(
  context:
    | ExecutorContext
    | {
        workspace: { projects: { [key: string]: { root: string } } };
        projectName: string;
      },
  command: string,
  options: { cwd?: string } = {}
): { success: boolean; stdio?: Buffer } {
  const cwd = context.workspace.projects[context.projectName].root;
  let cmd: string;
  try {
    cmd = `${runPythonCommand('-m pipenv --py', { cwd })}/bin`;
  } catch (e) {
    return undefined;
  }

  if (!cmd) {
    logger.fatal("Error finding the project's environment bin folder");
    return { success: false };
  }
  return runPythonCommand(command, { ...options, cmd });
}
