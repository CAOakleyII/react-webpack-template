import * as ActionTypes from '../actions/actionTypes.js';
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

const initialEntitiesStates = {};

/**
* @summary Entity Reducer, handles the database
*          models and their values within the state
*/
function entities(state = initialEntitiesStates, action) {
  switch(action.type){
    default:
    return state;
  }
}

/**
* @summary Helper method for the entity reducer to upsert an entity within the
*          state object.
*/
function updateStateEntities(entities, entity, state, key = "correlationId") {
  let existingEntity = entities.find((e) => e[key] == entity[key]);

  if (!existingEntity) {
    entities.push(entity);
  } else {
    Object.assign(existingEntity, entity);
  }

  return Object.assign({}, state);
}

/**
* @summary Combines the module reducers into one that is exported and used by
*          the store when configured.
*/
const reducers = combineReducers({
  entities,
  routing
});

export default reducers;
