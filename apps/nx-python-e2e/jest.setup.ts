import { ensureNxProject, runNxCommand } from '@nrwl/nx-plugin/testing';
import { packageInstall, packageUninstall } from './utils';

beforeAll(() => {
  ensureNxProject('@daidarabotchi/nx-python', 'dist/libs/nx-python');
  packageInstall('./dist/libs/nx-python');
});

afterAll(() => {
  packageUninstall('@daidarabotchi/nx-python');
  runNxCommand('reset');
});
