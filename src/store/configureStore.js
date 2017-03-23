import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducers from '../reducers/reducers.js';

export default function configureStore() {
  let middleware = [thunkMiddleware];

  if (process.env.NODE_ENV == "DEBUG") {
      middleware.push(createLogger());
  }

  let store = createStore(
    reducers,
    applyMiddleware(...middleware)
  );
  return store;
}
