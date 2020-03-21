import { Action, combineReducers } from 'redux'
import { GET_NAME } from './Types';
import { appState } from './State';

function GetName(state = appState, action: Action) {
  switch (action.type) {
    case GET_NAME: return { ...state };
    default: return state;
  }
}
const reducers = combineReducers({
  GetName,
})
export default reducers;
