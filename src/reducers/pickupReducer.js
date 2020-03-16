import {
    GET_ALLPICKUPS_START, GET_ALLPICKUPS_SUCCESS, GET_ALLPICKUPS_FAIL,
    GET_PICKUPBYID_START, GET_PICKUPBYID_SUCCESS, GET_PICKUPBYID_FAIL,
    GET_PICKUPBYVOLID_START, GET_PICKUPBYVOLID_SUCCESS, GET_PICKUPBYVOLID_FAIL,
    POST_PICKUP_START, POST_PICKUP_SUCCESS, POST_PICKUP_FAIL,
    PUT_PICKUP_START, PUT_PICKUP_SUCCESS, PUT_PICKUP_FAIL,
    REMOVE_PICKUP_START, REMOVE_PICKUP_SUCCESS, REMOVE_PICKUP_FAIL
} from '../actions/pickup-actions';

const initialState = {
    isLoading: false,
    error: '',
    pickup: []
}

export const pickupReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALLPICKUPS_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case GET_ALLPICKUPS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                pickup: action.payload
            }
        case GET_ALLPICKUPS_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case GET_PICKUPBYID_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case GET_PICKUPBYID_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                pickup: action.payload
            }
        case GET_PICKUPBYID_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case GET_PICKUPBYVOLID_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case GET_PICKUPBYVOLID_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                pickup: action.payload
            }
        case GET_PICKUPBYVOLID_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case POST_PICKUP_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case POST_PICKUP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                pickup: action.payload
            }
        case POST_PICKUP_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case PUT_PICKUP_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case PUT_PICKUP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                pickup: action.payload
            }
        case PUT_PICKUP_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case REMOVE_PICKUP_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case REMOVE_PICKUP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                pickup: action.payload
            }
        case REMOVE_PICKUP_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}