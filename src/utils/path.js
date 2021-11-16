import Path from 'path';

export const rootPath=process.cwd();

export const relativeToRoot=(path)=>{
  return Path.resolve(process.cwd(),path);
}