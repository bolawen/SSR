import axios from "axios";
import { mapValues, omit } from "lodash";

const request = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:4000/",
});

request.interceptors.request.use();
request.interceptors.response.use();
export const requestTransform = (config) => {
  return mapValues(config, (value) => {
    let method;
    let url;
    if (typeof value === "string") {
      url = value;
    } else {
      url = value.url;
      method = value.method;
      config = omit(value, ["url", "method"]);
    }
    method = method || "get";
    if (method === "get") {
      return function (params) {
        return new Promise((resolve, reject) => {
          request[method](url, { params, ...config })
            .then((result) => {
              resolve(result.data);
            })
            .catch((error) => {
              reject(error);
            });
        });
      };
    } else if (method === "post") {
      return function (params) {
        return new Promise((resolve, reject) => {
          request[method](url, params, config)
            .then((result) => {
              resolve(result.data);
            })
            .catch((error) => {
              reject(error);
            });
        });
      };
    }
  });
};

export default request;
