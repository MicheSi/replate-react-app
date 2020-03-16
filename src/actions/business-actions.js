import axios from 'axios';
import {axiosWithAuth} from '../utils/axiosWithAuth';
// register actions
export const POST_BREGISTER_START = 'POST_BREGISTER_START';
export const POST_BREGISTER_SUCCESS = 'POST_BREGISTER_SUCCESS';
export const POST_BREGISTER_FAIL = 'POST_BREGISTER_FAIL';
// login actions
export const POST_BLOGIN_START = 'POST_BLOGIN_START';
export const POST_BLOGIN_SUCCESS = 'POST_BLOGIN_SUCCESS';
export const POST_BLOGIN_FAIL = 'POST_BLOGIN_FAIL';
// read actions
export const GET_ALLBUSINESS_START = 'GET_ALLBUSINESS_START';
export const GET_ALLBUSINESS_SUCCESS = 'GET_ALLBUSINESS_SUCCESS';
export const GET_ALLBUSINESS_FAIL = 'GET_ALLBUSINESS_FAIL';
export const GET_BUSBYID_START = 'GET_BUSBYID_START';
export const GET_BUSBYID_SUCCESS = 'GET_BUSBYID_SUCCESS';
export const GET_BUSBYID_FAIL = 'GET_BUSBYID_FAIL';
// edit actions
export const PUT_BUSINESS_START = 'PUT_BUSINESS_START';
export const PUT_BUSINESS_SUCCESS = 'PUT_BUSINESS_SUCCESS';
export const PUT_BUSINESS_FAIL = 'PUT_BUSINESS_FAIL';
// delete actions
export const REMOVE_BUSINESS_START = 'REMOVE_BUSINESS_START';
export const REMOVE_BUSINESS_SUCCESS = 'REMOVE_BUSINESS_SUCCESS';
export const REMOVE_BUSINESS_FAIL = 'REMOVE_BUSINESS_FAIL';

export const registerBusiness = (props) => dispatch => {
    dispatch({type: POST_BREGISTER_START});
    axios
    .post('https://bw-replate2.herokuapp.com/api/auth/business/register')
    .then(res => {
        dispatch({type: POST_BREGISTER_SUCCESS, payload: res.data})
    })
    .catch(err =>
        dispatch({type: POST_BREGISTER_FAIL, payload: err}))
}

export const loginBusiness = (props) => dispatch => {
    dispatch({type: POST_BLOGIN_START});
    axios
    .post('https://bw-replate2.herokuapp.com/api/auth/business/login')
    .then(res => {
        dispatch({type: POST_BLOGIN_SUCCESS, payload: res.data})
    })
    .catch(err =>
        dispatch({type: POST_BLOGIN_FAIL, payload: err}))
}

export const getAllBus = (props) => dispatch => {
    dispatch({type: GET_ALLBUSINESS_START});
    axiosWithAuth()
    .get('/users/business')
    .then(res => {
        dispatch({type: GET_ALLBUSINESS_SUCCESS, payload: res.data})
    })
    .catch(err =>
        dispatch({type: GET_ALLBUSINESS_FAIL, payload: err}))
}

export const getBusById = (id) => dispatch => {
    dispatch({type: GET_BUSBYID_START});
    axiosWithAuth()
    .get(`/users/business/${id}`)
    .then(res => {
        dispatch({type: GET_BUSBYID_SUCCESS, payload: res.data})
    })
    .catch(err =>
        dispatch({type: GET_BUSBYID_FAIL, payload: err}))
}

export const editBusiness = (id, business) => dispatch => {
    dispatch({type: PUT_BUSINESS_START});
    axiosWithAuth()
    .put(`/users/business/${id}`, business)
    .then(res => {
        console.log('edit', res)
        dispatch({type: PUT_BUSINESS_SUCCESS, payload: res.data})
    })
    .catch(err =>
        dispatch({type: PUT_BUSINESS_FAIL, payload: err}))
}

export const deleteBusiness = (id, business) => dispatch => {
    dispatch({type: REMOVE_BUSINESS_START});
    axiosWithAuth()
    .delete(`/users/business/${id}`, business)
    .then(res => {
        dispatch({type: REMOVE_BUSINESS_SUCCESS, payload: res.data})
    })
    .catch(err =>
        dispatch({type: REMOVE_BUSINESS_FAIL, payload: err}))
}