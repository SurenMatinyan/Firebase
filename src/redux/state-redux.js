import { createStore, combineReducers } from 'redux';
import usersReducer from './users.reducer';


const reducer = combineReducers({
    users: usersReducer
});


const store = createStore(reducer);
export default store;
