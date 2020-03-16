import {
    GET_ALLFOOD_START, GET_ALLFOOD_SUCCESS, GET_ALLFOOD_FAIL,
    GET_FOODBYID_START, GET_FOODBYID_SUCCESS, GET_FOODBYID_FAIL,
    GET_FOODBYBUSID_START, GET_FOODBYBUSID_SUCCESS, GET_FOODBYBUSID_FAIL,
    POST_FOOD_START, POST_FOOD_SUCCESS, POST_FOOD_FAIL,
    PUT_FOOD_START, PUT_FOOD_SUCCESS, PUT_FOOD_FAIL,
    REMOVE_FOOD_START, REMOVE_FOOD_SUCCESS, REMOVE_FOOD_FAIL
} from '../actions/food-actions';

const initialState = {
    isLoading: false,
    error: '',
    food: []
}

export const foodReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALLFOOD_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case GET_ALLFOOD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                food: action.payload
            }
        case GET_ALLFOOD_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case GET_FOODBYID_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case GET_FOODBYID_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                food: action.payload
            }
        case GET_FOODBYID_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case GET_FOODBYBUSID_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case GET_FOODBYBUSID_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                food: action.payload
            }
        case GET_FOODBYBUSID_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case POST_FOOD_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case POST_FOOD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                food: action.payload
            }
        case POST_FOOD_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case PUT_FOOD_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case PUT_FOOD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                food: action.payload
            }
        case PUT_FOOD_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case REMOVE_FOOD_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case REMOVE_FOOD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                food: action.payload
            }
        case REMOVE_FOOD_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}