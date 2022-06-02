// There's a fake eslint error here
// eslint-disable-next-line import/extensions
import { TestExecutorSchema } from './schema';
import executor from './executor';

const options: TestExecutorSchema = {};

describe('Test Executor', () => {
  it('can run', async () => {
    const output = await executor(options);
    expect(output.success).toBe(true);
  });
});
