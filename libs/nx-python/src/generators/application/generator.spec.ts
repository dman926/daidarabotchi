import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';
import { Tree, readProjectConfiguration } from '@nrwl/devkit';

import generator from './generator';
// eslint-disable-next-line import/extensions
import { NxPythonGeneratorSchema } from './schema';

describe('nx-python generator', () => {
  let appTree: Tree;
  const options: NxPythonGeneratorSchema = {
    name: 'test',
    formatter: 'none',
    testRunner: 'none',
    typeChecker: 'none',
  };

  beforeEach(() => {
    appTree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await generator(appTree, options);
    const config = readProjectConfiguration(appTree, 'test');
    expect(config).toBeDefined();
  });
});
