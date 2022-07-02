import {
  ensureNxProject,
  runNxCommand,
  runNxCommandAsync,
  uniq,
} from '@nrwl/nx-plugin/testing';

describe('test executor', () => {
  let project: string;

  beforeAll(() => {
    project = uniq('nx-python3');
    ensureNxProject('@dman926/nx-python3', 'dist/libs/nx-python3');
    runNxCommand(
      `generate @dman926/nx-python3:application ${project} --no-interactive`
    );
  });

  afterAll(() => {
    // clean up virtualenv
    runNxCommand(`run ${project}:clean`);
    runNxCommand(`generate @nrwl/workspace:remove ${project} --no-interactive`);
    // clean up project
    runNxCommand('reset');
  });

  it('should test successfully', async () => {
    const result = await runNxCommandAsync(`test ${project}`);
    expect(result.stdout).toContain('Executor ran');
  });
});
