/* eslint-disable no-console */

// There's a fake eslint error here
// eslint-disable-next-line import/extensions
import { ExecutorContext } from '@nrwl/devkit';
import { runPythonCommand } from '../../utils';
// eslint-disable-next-line import/extensions
import { ServeExecutorSchema } from './schema';

export default async function runExecutor(
  options: ServeExecutorSchema,
  context: ExecutorContext
) {
  const { projectName } = context;
  const sourceRoot = context.workspace.projects[projectName].root;
  const cwd = `${options.cwd || sourceRoot}`;

  // We strip the project root from the main file
  const mainFile = options.main.replace(`${cwd}/`, '');

  return runPythonCommand(context, 'serve', [mainFile, ...options.args], {
    cmd: options.cmd,
    cwd,
  });
}
