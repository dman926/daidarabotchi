import {
  ensureNxProject,
  runNxCommand,
  runNxCommandAsync,
  uniq,
} from '@nrwl/nx-plugin/testing';

describe('builder executor', () => {
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

  it('should build successfully', async () => {
    const result = await runNxCommandAsync(`build ${project}`);
    expect(result.stdout).toContain('Executor ran');
  });
});
