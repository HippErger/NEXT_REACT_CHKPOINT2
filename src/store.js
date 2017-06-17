import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
// import state from './state';
// removed (.... = state)

export const initStore = initialState => {
  return createStore(rootReducer, initialState, composeWithDevTools(
    applyMiddleware(thunkMiddleware)));
};
