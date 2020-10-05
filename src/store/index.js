import { act } from 'react-dom/test-utils';
import { createStore } from 'redux';
import rootReducer from './reducers';


const store = createStore(rootReducer);

export default store;