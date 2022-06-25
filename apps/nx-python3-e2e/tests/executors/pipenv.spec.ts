import {
  ensureNxProject,
  runNxCommand,
  runNxCommandAsync,
  uniq,
} from '@nrwl/nx-plugin/testing';
import { killPorts } from '../../utils';

describe('pipenv executor', () => {
  let project: string;

  beforeAll(async () => {
    project = uniq('nx-python3');
    ensureNxProject('@dman926/nx-python3', 'dist/libs/nx-python3');
    await runNxCommandAsync(
      `generate @dman926/nx-python3:application ${project} --no-interactive`
    );
  });

  afterAll(async () => {
    // clean up virtualenv
    await runNxCommandAsync(`run ${project}:clean`);
    await runNxCommandAsync(
      `generate @nrwl/workspace:remove ${project} --no-interactive`
    );
    // clean up project
    await runNxCommandAsync('reset');
  });

  afterEach(async () => {
    await killPorts();
  });

  it('should pipenv successfully', async () => {
    const result = await runNxCommandAsync(`pipenv ${project}`);
    expect(result.stdout).toContain('Executor ran');
  });
});
