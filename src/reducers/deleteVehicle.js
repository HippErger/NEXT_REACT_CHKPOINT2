import {combineReducers} from 'redux';
import {
  ITEM_TO_DELETE_FAILED,
  ITEM_DELETED_SUCCESSFULLY,
  DELETE_THIS_ITEM,
} from '../actions';

function loading(state = false, action) {
  switch (action.type) {
    case DELETE_THIS_ITEM:
      return true;
    case ITEM_DELETED_SUCCESSFULLY:
    case ITEM_TO_DELETE_FAILED:
      return false;
  }
  return state;
}

function error(state = false, action) {
  switch (action.type) {
    case ITEM_TO_DELETE_FAILED:
      return action.message;
  }
  return state;
}

export default combineReducers({
  loading,
  error
});
