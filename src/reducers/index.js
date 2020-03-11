import {combineReducers} from 'redux';
import {businessReducer} from './businessReducer';
import {volunteerReducer} from './volunteerReducer';

export default combineReducers({
    businessReducer, volunteerReducer
});