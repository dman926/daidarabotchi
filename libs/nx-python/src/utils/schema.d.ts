export interface NormalizedExecutorOptions<T> extends T {
  root?: string;
  sourceRoot?: string;
  projectRoot?: string;
  mainOutputPath: string;
}
