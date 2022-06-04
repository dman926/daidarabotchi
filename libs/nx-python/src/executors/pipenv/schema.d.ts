export interface PipenvExecutorSchema {
  command:
    | 'check'
    | 'clean'
    | 'graph'
    | 'install'
    | 'lock'
    | 'open'
    | 'run'
    | 'scripts'
    | 'shell'
    | 'sync'
    | 'requirements'
    | 'uninstall';
  options?: string;
} // eslint-disable-line
