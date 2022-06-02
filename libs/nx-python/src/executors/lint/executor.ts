/* eslint-disable no-console */

// There's a fake eslint error here
// eslint-disable-next-line import/extensions
import { LintExecutorSchema } from './schema';

export default async function runExecutor(options: LintExecutorSchema) {
  console.log('Executor ran for Lint', options);
  return {
    success: true,
  };
}
