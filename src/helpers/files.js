import fs from 'fs'
import path from 'path'

export const getCWD = process.cwd;

export const getBase = () => {
    return path.basename(process.cwd());
};

export const dirExists = (dirPath) => {
    try {
        return fs.statSync(dirPath).isDirectory();
    } catch (err) {
        return false;
    }
};

export const mkDirIfNotExists = (dirName, options) => {
    if(!dirExists(dirName)) {
        fs.mkdirSync(dirName, options)
    }
};