import loginReducer from './logininfo';
import favouriteReducer from './favourite';
import sidebarReducer from './sidebar';
import currentPageReducer from './currentpage';
import loadingReducer from './loading';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    loginReducer,
    favouriteReducer,
    sidebarReducer,
    currentPageReducer,
    loadingReducer
});
export default allReducers;