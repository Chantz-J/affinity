import { combineReducers } from 'redux';

// REDUCERS
import { strapiReducer } from './strapi/strapi-reducer';

// ROOT
export default combineReducers({
    strapi: strapiReducer,
})