// There's a fake eslint error here
// eslint-disable-next-line import/extensions
import { LintExecutorSchema } from './schema';
import executor from './executor';

const options: LintExecutorSchema = {};

describe('Lint Executor', () => {
  it('can run', async () => {
    const output = await executor(options);
    expect(output.success).toBe(true);
  });
});
