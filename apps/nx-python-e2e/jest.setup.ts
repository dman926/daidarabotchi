import { packageInstall, packageUninstall } from './utils';

beforeAll(() => {
  packageInstall('./dist/libs/nx-python');
});

afterAll(() => {
  packageUninstall('@daidarabotchi/nx-python');
});
