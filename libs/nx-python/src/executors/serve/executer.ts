/* eslint-disable no-console */

// There's a fake eslint error here
// eslint-disable-next-line import/extensions
import { ServeExecutorSchema } from './schema';

export default async function runExecutor(options: ServeExecutorSchema) {
  console.log('Executor ran for Serve', options);
  return {
    success: true,
  };
}
