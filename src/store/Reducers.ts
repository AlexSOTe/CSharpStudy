import { GETNAME } from '../Constants/Constants';
import { appState } from './State';
import { ModifyAction } from './Actions';
import { HomeState } from '../types/AppState';
import { combineReducers, } from 'redux';

const homeState = (state: HomeState = appState.Home, action: ModifyAction) => {
  let stateTemp;
  switch (action.type) {
    case GETNAME:
      stateTemp = {
        ...state,
        ...action,
        id: state.id + 1
      };
      break;
    default:
      stateTemp = state;
      break;
  }
  return stateTemp;
}

const reducers = combineReducers({
  homeState
})
export default reducers;
