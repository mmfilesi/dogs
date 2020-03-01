import apiRest from '../rest/api-rest';
import { IntDog } from '../../schemas/dogs';
import { IntResponses } from '../../schemas/responses';

const parseDogs = (resp: IntResponses): Array<IntDog> => {
  const dogs = [] as Array<IntDog>;

  if (apiRest.isSuccessResponse(resp)) {
    Object.entries(resp.message).forEach(([key, value]) => {
      let temp = {} as IntDog;

      temp.name = key;
      temp.species = Array.isArray(value) ? value : [];

      dogs.push(temp);
    });
  }

  return dogs;
}

const getDogs = (): Promise<Array<IntDog> | string> => {
  return new Promise( (resolve, reject) => {
    apiRest.get('breeds/list/all').then( (resp) => {
      const dogsMapped = parseDogs(resp.data);

      if (dogsMapped.length) {
        resolve(dogsMapped);

      } else {
        reject('error');
      }
    }).catch( () => {
      reject('error');
    })
  });
};

const getDogImages = (url: string): Promise<Array<string> | string> => {
  return new Promise( (resolve, reject) => {
    apiRest.get(`breed/${url}/images`).then( (resp) => {
      if (apiRest.isSuccessResponse(resp.data) && Array.isArray(resp.data.message)) {
        resolve(resp.data.message);

      } else {
        reject('error');
      }
    }).catch( () => {
      reject('error');
    })
  });
};

const dogsService = () => {
  return {
    getDogs,
    getDogImages
  }
};

export default dogsService;
