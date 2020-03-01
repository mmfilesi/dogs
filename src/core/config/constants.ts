interface constants {
  ENVIRONMENT: 'dev' | 'prod';
  BASE_URL: {
    dev: string;
    prod: string;
  },
  API_VERSION: string;
}

const constants: constants = {
  ENVIRONMENT: 'dev',
  BASE_URL: {
    dev: 'https://dog.ceo',
    prod: 'https://dog.ceo'
  },
  API_VERSION: 'api'
};

export default constants;