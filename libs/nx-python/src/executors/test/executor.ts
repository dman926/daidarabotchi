/* eslint-disable no-console */

// There's a fake eslint error here
// eslint-disable-next-line import/extensions
import { ExecutorContext } from '@nrwl/devkit';
import { runPythonCommand } from '../../utils';
// eslint-disable-next-line import/extensions
import { TestExecutorSchema } from './schema';

export default async function runExecutor(
  options: TestExecutorSchema,
  context: ExecutorContext
) {
  const { projectName } = context;
  const sourceRoot = context.workspace.projects[projectName].root;
  const cwd = `${sourceRoot}`;

  return runPythonCommand(context, 'test', [], { cwd });
}
