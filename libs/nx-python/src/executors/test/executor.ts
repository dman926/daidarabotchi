/* eslint-disable no-console */

// There's a fake eslint error here
// eslint-disable-next-line import/extensions
import { TestExecutorSchema } from './schema';

export default async function runExecutor(options: TestExecutorSchema) {
  console.log('Executor ran for Test', options);
  return {
    success: true,
  };
}
