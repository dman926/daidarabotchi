import { runNxCommand, uniq } from '@nrwl/nx-plugin/testing';

describe('application generator', () => {
  let project: string;

  beforeEach(() => {
    project = uniq('nx-python');
    runNxCommand(
      `generate @daidarabotchi/nx-python:application ${project} --no-interactive`
    );
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
