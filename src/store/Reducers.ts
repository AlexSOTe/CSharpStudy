import { combineReducers } from 'redux'
import { GETNAME } from './Types';
import { appState } from './State';
import { ModifyAction } from './Actions';
import { AppState } from '../types/AppState';

function SetName(state: AppState = appState, action: ModifyAction) {
  let stateTemp;
  switch (action.type) {
    case GETNAME:
      stateTemp = {
        Home: {
          id: state.Home.id,
          name: state.Home.name
        }
      };
      break;
    default:
      stateTemp = state;
      break;
  }
  console.log(stateTemp);
  return stateTemp;
}
const reducers = combineReducers({
  SetName,
})
export default reducers;
