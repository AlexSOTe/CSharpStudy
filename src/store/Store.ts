import { createStore } from 'redux';
import reducers from './Reducers';
//����Ӧ��store
const store = createStore(reducers);
export default store;
