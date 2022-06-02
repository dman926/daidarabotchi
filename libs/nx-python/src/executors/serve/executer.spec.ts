// There's a fake eslint error here
// eslint-disable-next-line import/extensions
import { ServeExecutorSchema } from './schema';
import executor from './executer';

const options: ServeExecutorSchema = {};

describe('Serve Executor', () => {
  it('can run', async () => {
    const output = await executor(options);
    expect(output.success).toBe(true);
  });
});
