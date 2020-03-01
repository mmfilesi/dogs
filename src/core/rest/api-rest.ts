import axios from 'axios';
import constants from '../config/constants';
import { IntResponses } from '../../schemas/responses';

interface IntApiRest {
  _getUrl(_url_: string): string;
  get(_url_: string): Promise<any>;
  post(_url_: string, payload?: any): Promise<any>;
  put(_url_: string, payload?: any): Promise<any>;
  delete(_url_: string): Promise<any>;
  isSuccessResponse(response: IntResponses) : boolean;
}

const apiRest = ( ()=> {

  const module = {} as IntApiRest;
  const self = module;

  module._getUrl = (_url_) => {
    return `${constants.BASE_URL[constants.ENVIRONMENT]}/${constants.API_VERSION}/${_url_}`;
  }

  module.get = (_url_) => {
    const url = self._getUrl(_url_);
    return axios.get(url);
  };

  module.post = (_url_, payload) => {
    const url = self._getUrl(_url_);
    return axios.post(url, payload);
  };

  module.put = (_url_, payload) => {
    const url = self._getUrl(_url_);
    return axios.put(url, payload);
  };

  module.delete = (_url_) => {
    const url = self._getUrl(_url_);
    return axios.delete(url);
  };

  module.isSuccessResponse = (response) => {
    if (response.hasOwnProperty('status') && response.status === 'success' && response.hasOwnProperty('message')) {
      return true;
    }
    return false;
  };

  return {
    get: module.get,
    post: module.post,
    put: module.put,
    delete: module.delete,
    isSuccessResponse: module.isSuccessResponse
  }

})();

export default apiRest;