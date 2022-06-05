import {
  ensureNxProject,
  runNxCommand,
  runNxCommandAsync,
  uniq,
} from '@nrwl/nx-plugin/testing';

describe('pipenv executor', () => {
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
    // `nx reset` kills the daemon, and performs
    // some work which can help clean up e2e leftovers
    runNxCommandAsync('reset');
  });

  beforeEach(() => {
    app = uniq('nx-python');
    runNxCommand(`generate @daidarabotchi/nx-python:application ${app}`);
  });

  afterEach(() => {
    // clean up virtualenv
    runNxCommandAsync(`run ${app}:preremove`);
  });

  it('should pipenv successfully', async () => {
    const result = await runNxCommandAsync(`run ${app}:pipenv`);
    expect(result.stdout).toContain('Executor ran');
  });
});
