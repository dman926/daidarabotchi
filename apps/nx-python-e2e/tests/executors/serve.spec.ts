import {
  ensureNxProject,
  runNxCommand,
  runNxCommandAsync,
  uniq,
} from '@nrwl/nx-plugin/testing';
import { killPorts } from '../../utils';

describe('serve executor', () => {
  let app: string;

  // Setting up individual workspaces per
  // test can cause e2e runs to take a long time.
  // For this reason, we recommend each suite only
  // consumes 1 workspace. The tests should each operate
  // on a unique project in the workspace, such that they
  // are not dependant on one another.
  beforeAll(() => {
    ensureNxProject('@daidarabotchi/nx-python', 'dist/libs/nx-python');
  });

  afterAll(() => {
    // clean up virtualenv
    runNxCommand(`run ${app}:clean`);
    // `nx reset` kills the daemon, and performs
    // some work which can help clean up e2e leftovers
    runNxCommandAsync('reset');
  });

  beforeEach(() => {
    app = uniq('nx-python');
    runNxCommand(`generate @daidarabotchi/nx-python:application ${app}`);
  });

  afterEach(() => {
    killPorts();
  });

  it('should serve successfully', async () => {
    const result = await runNxCommandAsync(`serve ${app}`);
    expect(result.stdout).toContain('Executor ran');
  });
});
