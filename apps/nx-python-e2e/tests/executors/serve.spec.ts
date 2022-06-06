import { runNxCommand, runNxCommandAsync, uniq } from '@nrwl/nx-plugin/testing';
import { killPorts } from '../../utils';

describe('serve executor', () => {
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

  afterEach(() => {
    killPorts();
  });

  it('should serve successfully', async () => {
    const result = await runNxCommandAsync(`serve ${project}`);
    expect(result.stdout).toContain('Executor ran');
  });
});
