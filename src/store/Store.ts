import { createStore } from 'redux';
import reducers from './Reducers';
//创建应用store
const store = createStore(reducers);
export default store;
