import {
    POST_VREGISTER_START, POST_VREGISTER_SUCCESS, POST_VREGISTER_FAIL,
    POST_VLOGIN_START, POST_VLOGIN_SUCCESS, POST_VLOGIN_FAIL,
    GET_ALLVOLUNTEERS_START, GET_ALLVOLUNTEERS_SUCCESS, GET_ALLVOLUNTEERS_FAIL,
    GET_VOLBYID_START, GET_VOLBYID_SUCCESS, GET_VOLBYID_FAIL,
    PUT_VOLUNTEER_START, PUT_VOLUNTEER_SUCCESS, PUT_VOLUNTEER_FAIL,
    REMOVE_VOLUNTEER_START, REMOVE_VOLUNTEER_SUCCESS, REMOVE_VOLUNTEER_FAIL
} from '../actions/volunteer-actions-actions';

const initialState = {
    isLoading: false,
    error: '',
    volunteer: []
}

export const volunteerReducer = (state = initialState, action) => {
    switch(action.type) {
        case POST_VREGISTER_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case POST_VREGISTER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                volunteer: action.payload,
            }
        case POST_VREGISTER_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case POST_VLOGIN_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case POST_VLOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                volunteer: action.payload,
            }
        case POST_VLOGIN_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case GET_ALLVOLUNTEERS_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case GET_ALLVOLUNTEERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                volunteer: action.payload
            }
        case GET_ALLVOLUNTEERS_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case GET_VOLBYID_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case GET_VOLBYID_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                volunteer: action.payload
            }
        case GET_VOLBYID_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case PUT_VOLUNTEER_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case PUT_VOLUNTEER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                volunteer: action.payload
            }
        case PUT_VOLUNTEER_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case REMOVE_VOLUNTEER_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case REMOVE_VOLUNTEER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                volunteer: action.payload
            }
        case REMOVE_VOLUNTEER_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}