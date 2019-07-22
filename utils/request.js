import axios from "axios";
import { writeJson, readJson, writePicture } from "./files";
import path from "path";

const API_URL = "https://m.douban.com";
const preFix = "/rexxar/api/v2";
const preFixImage = /https:\/\/img[0-9]\.doubanio\.com\/view\/note(\/l\/public\/\.*)/;

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    Referer: API_URL
  }
});

export const getJsonPath = localPath =>
  path
    .resolve(__dirname, "..", "assets" + localPath + ".json")
    .replace(preFix, "");

instance.interceptors.request.use(async config => {
  if (!config.url.startsWith(`https`)) {
    const data = await readJson(getJsonPath(config.url));
    if (data) {
      config.url = "/";
      config.data = data;
    } else {
      config.isJsonData = config.url;
    }
  } else if (config.url.match(preFixImage)) {
    config.isImageData = config.url;
    config.responseType = "arraybuffer";
  }
  return config;
});

instance.interceptors.response.use(async res => {
  const config = res.config;
  if (config.data) {
    res.data = config.data;
  }
  if (config.isJsonData) {
    writeJson(getJsonPath(config.isJsonData), JSON.stringify(res.data));
  }
  // if (config.isImageData) {
  //   await writePicture(
  //     getPicturePath(config.isImageData.replace(preFixImage, "$1")),
  //     res.data
  //   );
  // }

  return res;
});

export const getParams = (query = {}, start, count) => {
  query.start = Number(query.start);
  query.count = Number(query.count);
  if (isNaN(query.start)) {
    query.start = start;
  }
  if (isNaN(query.count)) {
    query.count = count;
  }
  if (query.count > 20) {
    query.count = 20;
  }
  return query;
};

export default instance;
