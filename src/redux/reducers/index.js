import {
    combineReducers
} from 'redux';
import { connectRouter } from 'connected-react-router';
import userReducer from './user';

const rootReducer = combineReducers({
    user: userReducer,
})

export default rootReducer