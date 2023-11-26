
export type BuildMode = 'production' | 'development';

export type BuildPaths = {
  entry: string;
  html: string;
  output: string;
}

export type BuildOptions = {
  port: number;
  paths: BuildPaths;
  mode: BuildMode
}