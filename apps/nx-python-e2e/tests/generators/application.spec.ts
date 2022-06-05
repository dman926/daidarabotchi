import {
  ensureNxProject,
  readJson,
  runNxCommandAsync,
  uniq,
} from '@nrwl/nx-plugin/testing';

describe('application generator', () => {
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

  it('should create nx-python', async () => {
    const project = uniq('nx-python');
    await runNxCommandAsync(
      `generate @daidarabotchi/nx-python:application ${project}`
    );
    const result = await runNxCommandAsync(`build ${project}`);
    expect(result.stdout).toContain('Generate ran');
    await runNxCommandAsync(`run ${project}:preremove`);
  }, 120000);

  describe('--tags', () => {
    it('should add tags to the project', async () => {
      const projectName = uniq('nx-python');
      ensureNxProject('@daidarabotchi/nx-python', 'dist/libs/nx-python');
      await runNxCommandAsync(
        `generate @daidarabotchi/nx-python:application ${projectName} --tags e2etag,e2ePackage`
      );
      const project = readJson(`libs/${projectName}/project.json`);
      expect(project.tags).toEqual(['e2etag', 'e2ePackage']);
      await runNxCommandAsync(`run ${project}:preremove`);
    }, 120000);
  });
});
