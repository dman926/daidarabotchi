/* eslint-disable no-console */

// There's a fake eslint error here
// eslint-disable-next-line import/extensions
import { ExecutorContext } from '@nrwl/devkit';
import { runPythonCommand } from '../../utils';
// eslint-disable-next-line import/extensions
import { LintExecutorSchema } from './schema';

export default async function runExecutor(
  options: LintExecutorSchema,
  context: ExecutorContext
) {
  const projectName = context?.projectName;
  const sourceRoot = context?.workspace?.projects[projectName]?.root;
  const cwd = `${sourceRoot}`;

  return runPythonCommand(context, 'lint', ['--recursive=y', '.'], {
    cwd,
    cmd: 'pylint',
  });
}
