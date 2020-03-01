import { IntDog, IntDogSelected } from '../../schemas/dogs';

/* ========================================================
  TYPES
======================================================== */

const DOGS_FETCH = 'dogs/raceList/fetch';
const DOG_SELECT = 'dogs/dog/select';
const DOG_UNSELECT = 'dogs/dog/unselect';

/* ========================================================
  INTERFACES
======================================================== */

interface IntDogsReducer {
  dogs: Array<IntDog>;
  dogSelected: IntDogSelected;
}

/* ========================================================
  AUX
======================================================== */

function initDogSelected() {
  return {
    dog: 'noDogSelected',
    specie: 'noDogSelected',
    species: [],
    images: []
  }
}

/* ========================================================
  REDUCER
======================================================== */

const initialState: IntDogsReducer = {
  dogs: [],
  dogSelected: initDogSelected()
};

export const dogsReducer = (state = initialState, action: any) => {

  switch (action.type) {

    case DOGS_FETCH:
      return { ...state, dogs: action.payload };

    case DOG_SELECT:
      return { ...state, dogSelected: action.payload };

    case DOG_UNSELECT:
      return { ...state, dogSelected: initDogSelected()
      };

    default:
      return state;
  }
};

/* ========================================================
  ACTIONS
======================================================== */

const fetchDogs = (users: Array<IntDog>) => {
  return {
    type: DOGS_FETCH,
    payload: users
  }
};

const selectDog = (dog: IntDogSelected) => {
  return {
    type: DOG_SELECT,
    payload: dog
  }
};

const unselectDog = () => {
  return {
    type: DOG_UNSELECT
  }
};


export const actionsDogs = ()=> {
  return {
    fetchDogs,
    selectDog,
    unselectDog
  }
};