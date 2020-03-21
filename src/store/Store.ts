import { createStore } from 'redux';
import reducers from './Reducers';
import { AppState } from '../Models/AppState';
//import { appState } from './State';

export const mapStateToProps = (state: AppState) => {
  return {
    Home: state.Home
  }
}
const store = createStore(reducers);
export default store;
