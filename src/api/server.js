import axios from "axios";
import { mapValues, omit } from "lodash";

const request = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:4000/",
  // baseURL:'https://bolawen.com/server'
});

request.interceptors.request.use(
  (config) => {
    const { token } = config;
    if (token) {
      config.headers.common["Authorization"] = "Bearer " + token;
      config.headers.common['Origin'] = "http://localhost:8090"
    }
    return config;
  },
  (error) => {}
);
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
      config.headers = {};
    }
    method = method || "get";
    if (method === "get") {
      return function (params, ctx) {
        config.token = ctx.cookies.get("token");
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
      return function (params, ctx) {
        config.token = ctx.cookies.get("token");
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
