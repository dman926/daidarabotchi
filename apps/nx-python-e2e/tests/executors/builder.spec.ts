import { runNxCommand, runNxCommandAsync, uniq } from '@nrwl/nx-plugin/testing';

describe('builder executor', () => {
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

  it('should build successfully', async () => {
    const result = await runNxCommandAsync(`build ${project}`);
    expect(result.stdout).toContain('Executor ran');
  });
});
