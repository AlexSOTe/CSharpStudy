import { GETNAME } from '../Constants/Constants';
import { appState } from './State';
import { ModifyAction } from './Actions';
import { HomeState } from '../Types/AppState';
import { combineReducers, } from 'redux';
/**
 * HomeReducer 用于处理action发送给store的数据
 * @param {HomeState} preHomeState 上一次的homeState
 * @param {ModifyAction} action action传递过来的带有type的数据
 * @returns {HomeState} homeState 生成的新的homeState
 */
const homeState = (preHomeState: HomeState = appState.Home, action: ModifyAction): HomeState => {
  let stateTemp;
  switch (action.type) {
    case GETNAME:
      stateTemp = {
        ...preHomeState,
        ...action,
        id: preHomeState.id + 1
      };
      break;
    default:
      // 没有任何action的话直接吧上一次的homeState抛出
      stateTemp = preHomeState;
      break;
  }
  return stateTemp;
}
// 可将多个reducer合并到一起
const reducers = combineReducers({
  homeState
})
export default reducers;
