import {
  ensureNxProject,
  runNxCommand,
  runNxCommandAsync,
  uniq,
} from '@nrwl/nx-plugin/testing';
import { killPorts } from '../../utils';

describe('serve executor', () => {
  let project: string;

  beforeAll(() => {
    project = uniq('nx-python');
    ensureNxProject('@daidarabotchi/nx-python', 'dist/libs/nx-python');
    runNxCommand(
      `generate @daidarabotchi/nx-python:application ${project} --no-interactive`
    );
  });

  afterAll(() => {
    // clean up virtualenv
    runNxCommand(`run ${project}:clean`);
    runNxCommand(`generate @nrwl/workspace:remove ${project} --no-interactive`);
    // clean up project
    runNxCommand('reset');
  });

  afterEach(() => {
    killPorts();
  });

  it('should serve successfully', async () => {
    const result = await runNxCommandAsync(`serve ${project}`);
    expect(result.stdout).toContain('Executor ran');
  });
});
