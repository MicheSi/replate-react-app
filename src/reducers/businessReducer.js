import {
    POST_BREGISTER_START, POST_BREGISTER_SUCCESS, POST_BREGISTER_FAIL,
    POST_BLOGIN_START, POST_BLOGIN_SUCCESS, POST_BLOGIN_FAIL,
    GET_ALLBUSINESS_START, GET_ALLBUSINESS_SUCCESS, GET_ALLBUSINESS_FAIL,
    GET_BUSBYID_START, GET_BUSBYID_SUCCESS, GET_BUSBYID_FAIL,
    PUT_BUSINESS_START, PUT_BUSINESS_SUCCESS, PUT_BUSINESS_FAIL,
    REMOVE_BUSINESS_START, REMOVE_BUSINESS_SUCCESS, REMOVE_BUSINESS_FAIL
} from '../actions/business-actions';

const initialState = {
    isLoading: false,
    error: '',
    business: []
}

export const businessReducer = (state = initialState, action) => {
    switch(action.type) {
        case POST_BREGISTER_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case POST_BREGISTER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                business: action.payload,
            }
        case POST_BREGISTER_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case POST_BLOGIN_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case POST_BLOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                business: action.payload,
            }
        case POST_BLOGIN_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case GET_ALLBUSINESS_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case GET_ALLBUSINESS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                business: action.payload
            }
        case GET_ALLBUSINESS_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case GET_BUSBYID_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case GET_BUSBYID_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                business: action.payload
            }
        case GET_BUSBYID_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case PUT_BUSINESS_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case PUT_BUSINESS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                business: action.payload
            }
        case PUT_BUSINESS_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case REMOVE_BUSINESS_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case REMOVE_BUSINESS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                business: action.payload
            }
        case REMOVE_BUSINESS_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}