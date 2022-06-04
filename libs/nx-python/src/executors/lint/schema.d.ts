export interface LintExecutorSchema {
  typeChecker: 'none' | 'mypy' | 'pyright' | 'pytype' | 'pyre';
}
