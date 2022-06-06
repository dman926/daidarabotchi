import {
  ensureNxProject,
  runNxCommand,
  uniq,
} from '@nrwl/nx-plugin/testing';

describe('application generator', () => {
  let project: string;

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
    runNxCommand('reset');
  });

  beforeEach(() => {
    project = uniq('nx-python');
    ensureNxProject('@daidarabotchi/nx-python', 'dist/libs/nx-python');
    runNxCommand(`generate @daidarabotchi/nx-python:application ${project} --no-interactive`);
  });

  afterEach(() => {
    runNxCommand(`run ${project}:clean`);
    runNxCommand(`generate @nrwl/workspace:remove ${project} --no-interactive`);
  });

  it('should create nx-python', async () => {
    // dummy assert because beforeEach and afterEach take care of this test
    expect(true).toBeTruthy();
  }, 120000);
});
