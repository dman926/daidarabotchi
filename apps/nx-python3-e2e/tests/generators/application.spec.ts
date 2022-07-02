import { ensureNxProject, runNxCommand, uniq } from '@nrwl/nx-plugin/testing';

describe('application generator', () => {
  let project: string;

  beforeEach(() => {
    project = uniq('nx-python3');
    ensureNxProject('@dman926/nx-python3', 'dist/libs/nx-python3');
    runNxCommand(
      `generate @dman926/nx-python3:application ${project} --no-interactive`
    );
  });

  afterEach(() => {
    runNxCommand(`run ${project}:clean`);
    runNxCommand(`generate @nrwl/workspace:remove ${project} --no-interactive`);
    // clean up project
    runNxCommand('reset');
  });

  it('should create nx-python', async () => {
    // dummy assert because beforeEach and afterEach take care of this test
    expect(true).toBeTruthy();
  }, 120000);
});
