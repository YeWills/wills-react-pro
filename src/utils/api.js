import axios from 'axios';
import { buildConfig } from '../app/config/buildConfig';

const defaultHeader = {

  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const instance = axios.create({
  baseURL: buildConfig.apiDomain,
  timeout: 5000,
  headers: defaultHeader,
  withCredentials: true,
});

const returnJson = response => response.data;

const standardResponse = (response) => {
  // console.log(`axios请求返回：：${response}`)
  if (response.status < 400) {
    return returnJson(response);
  }
  return Promise.reject(returnJson(response));
};

const api = () => {
  let opt = {
    instance,
  };

  return {
    setOptions: (options) => {
      opt = {
        ...opt,
        ...options,
      };
    },
    get: (url, query) => {
      return opt.instance.get(url, {
        params: query,
      }).then(standardResponse);
    },
    post: (url, data) => {
      return opt.instance.post(url, data).then(standardResponse);
    },
    delete: url => (
      opt.instance.delete(url).then(standardResponse)
    ),
  };
};

export default api();
