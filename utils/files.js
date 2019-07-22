import path from "path";
import fs from "fs";
import mkdirp from "mkdirp";
export const getExt = filePath => filePath.substr(filePath.lastIndexOf("."));

export const ensurePathExist = dir => mkdirp.sync(dir);

export function writeJson(filePath, contents) {
  const dir = path.dirname(filePath);
  ensurePathExist(dir);
  fs.writeFileSync(filePath, contents);
  return true;
}

export async function readJson(filePath) {
  const dir = path.dirname(filePath);
  ensurePathExist(dir);
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch (e) {
    return;
  }
}

export async function writePicture(filePath, content) {
  const dir = path.dirname(filePath);
  ensurePathExist(dir);
  fs.createWriteStream(filePath).write(content, function(err) {
    // console.log(err, "xxxxxx");
  });
  //console.log(filePath);
}

export async function downloadPicture(content, fullPath) {
  const result = await new Promise(resolve => {
    ensurePathExist(path.dirname(fullPath));
    fs.createWriteStream(fullPath).write(content, function(err) {
      resolve(err);
    });
  });
  return result;
}

export const preFixImage = /https:\/\/img[0-9]\.doubanio\.com\/view\/[a-zA-Z_\/]*(\/public\/\.*)/;
