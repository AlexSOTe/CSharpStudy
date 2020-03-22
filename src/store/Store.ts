import { createStore, Dispatch } from 'redux';
import reducers from './Reducers';
import { AppState } from '../types/AppState';
import { SetName } from './Actions';

export const mapStateToProps = (state: AppState) => {
  return {
    Home: state.Home
  }
}

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  SetName: () => dispatch(SetName("alex"))
})

const store = createStore(reducers);
export default store;
