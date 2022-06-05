import {
  ensureNxProject,
  readJson,
  runNxCommand,
  runNxCommandAsync,
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
    runNxCommandAsync('reset');
  });

  beforeEach(() => {
    project = uniq('nx-python');
    runNxCommand(`generate @daidarabotchi/nx-python:application ${project}`);
  });

  afterEach(() => {
    runNxCommand(`run ${project}:clean`);
    runNxCommand(`generate @nrwl/workspace:remove ${project} --no-interactive`);
  });

  it('should create nx-python', async () => {
    // dummy assert because beforeEach and afterEach take care of this test
    expect(true).toBeTruthy();
  }, 120000);

  describe('--tags', () => {
    it('should add tags to the project', async () => {
      const projectJson = readJson(`libs/${project}/project.json`);
      expect(projectJson.tags).toEqual(['e2etag', 'e2ePackage']);
    }, 120000);
  });
});
