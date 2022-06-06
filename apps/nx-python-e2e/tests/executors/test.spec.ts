import { runNxCommand, runNxCommandAsync, uniq } from '@nrwl/nx-plugin/testing';

describe('test executor', () => {
  let project: string;

  beforeAll(() => {
    project = uniq('nx-python');
    runNxCommand(
      `generate @daidarabotchi/nx-python:application ${project} --no-interactive`
    );
  });

  afterAll(() => {
    // clean up virtualenv
    runNxCommand(`run ${project}:clean`);
    runNxCommand(`generate @nrwl/workspace:remove ${project} --no-interactive`);
  });

  it('should test successfully', async () => {
    const result = await runNxCommandAsync(`test ${project}`);
    expect(result.stdout).toContain('Executor ran');
  });
});
