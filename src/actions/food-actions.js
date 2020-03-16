import {axiosWithAuth} from '../utils/axiosWithAuth';
// get food actions
export const GET_ALLFOOD_START = 'GET_ALLFOOD_START';
export const GET_ALLFOOD_SUCCESS = 'GET_ALLFOOD_SUCCESS';
export const GET_ALLFOOD_FAIL = 'GET_ALLFOOD_FAIL';
export const GET_FOODBYID_START = 'GET_FOODBYID_START';
export const GET_FOODBYID_SUCCESS = 'GET_FOODBYID_SUCCESS';
export const GET_FOODBYID_FAIL = 'GET_FOODBYID_FAIL';
export const GET_FOODBYBUSID_START = 'GET_FOODBYBUSID_START';
export const GET_FOODBYBUSID_SUCCESS = 'GET_FOODBYBUSID_SUCCESS';
export const GET_FOODBYBUSID_FAIL = 'GET_FOODBYBUSID_FAIL';
// create food actions
export const POST_FOOD_START = 'POST_FOOD_START';
export const POST_FOOD_SUCCESS = 'POST_FOOD_SUCCESS';
export const POST_FOOD_FAIL = 'POST_FOOD_FAIL';
// update food actions
export const PUT_FOOD_START = 'PUT_FOOD_START';
export const PUT_FOOD_SUCCESS = 'PUT_FOOD_SUCCESS';
export const PUT_FOOD_FAIL = 'PUT_FOOD_FAIL';
// delete food actions
export const REMOVE_FOOD_START = 'REMOVE_FOOD_START';
export const REMOVE_FOOD_SUCCESS = 'REMOVE_FOOD_SUCCESS';
export const REMOVE_FOOD_FAIL = 'REMOVE_FOOD_FAIL';

export const getAllFood = (props) => dispatch => {
    dispatch({type: GET_ALLFOOD_START});
    axiosWithAuth()
    .get('/api/food')
    .then(res => {
        dispatch({type: GET_ALLFOOD_SUCCESS, payload: res.data})
    })
    .catch(err =>
        dispatch({type: GET_ALLFOOD_FAIL, payload: err}))
}

export const getFoodById = id => dispatch => {
    dispatch({type: GET_FOODBYID_START});
    axiosWithAuth()
    .get(`/api/food/${id}`)
    .then(res => {
        dispatch({type: GET_FOODBYID_SUCCESS, payload: res.data})
    })
    .catch(err =>
        dispatch({type: GET_FOODBYID_FAIL, payload: err}))
}

export const getFoodByBusId = id => dispatch => {
    dispatch({type: GET_FOODBYBUSID_START});
    axiosWithAuth()
    .get(`/api/food/business/${id}`)
    .then(res => {
        dispatch({type: GET_FOODBYBUSID_SUCCESS, payload: res.data})
    })
    .catch(err =>
        dispatch({type: GET_FOODBYBUSID_FAIL, payload: err}))
}

export const editFood = (id, food) => dispatch => {
    dispatch({type: PUT_FOOD_START});
    axiosWithAuth()
    .put(`/api/food/${id}`, food)
    .then(res => {
        dispatch({type: PUT_FOOD_SUCCESS, payload: res.data})
    })
    .catch(err =>
        dispatch({type: PUT_FOOD_FAIL, payload: err}))
}

export const deleteFood = (id, food) => dispatch => {
    dispatch({type: REMOVE_FOOD_START});
    axiosWithAuth()
    .delete(`/api/food/${id}`, food)
    .then(res => {
        dispatch({type: REMOVE_FOOD_SUCCESS, payload: res.data})
    })
    .catch(err =>
        dispatch({type: REMOVE_FOOD_FAIL}))
}