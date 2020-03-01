import { createStore, combineReducers } from 'redux';

import { dogsReducer } from './reducers/dogs-reducer';

const reducer = combineReducers({
    dogsReducer: dogsReducer,
});
const appStore = createStore(reducer);

export default appStore;