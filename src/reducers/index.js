import {combineReducers} from 'redux';
import {businessReducer} from './businessReducer';
import {volunteerReducer} from './volunteerReducer';
import {foodReducer} from './foodReducer';
import {pickupReducer} from './pickupReducer';

export default combineReducers({
    businessReducer, volunteerReducer, foodReducer, pickupReducer
});