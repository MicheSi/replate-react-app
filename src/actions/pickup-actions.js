import axiosWithAuth from '../utils/axiosWithAuth';
// get pickup actions
export const GET_ALLPICKUPS_START = 'GET_ALLPICKUPS_START';
export const GET_ALLPICKUPS_SUCCESS = 'GET_ALLPICKUPS_SUCCESS';
export const GET_ALLPICKUPS_FAIL = 'GET_ALLPICKUPS_FAIL';
export const GET_PICKUPBYID_START = 'GET_PICKUPBYID_START';
export const GET_PICKUPBYID_SUCCESS = 'GET_PICKUPBYID_SUCCESS';
export const GET_PICKUPBYID_FAIL = 'GET_PICKUPBYID_FAIL';
export const GET_PICKUPBYVOLID_START = 'GET_PICKUPBYVOLID_START';
export const GET_PICKUPBYVOLID_SUCCESS = 'GET_PICKUPBYVOLID_SUCCESS';
export const GET_PICKUPBYVOLID_FAIL = 'GET_PICKUPBYVOLID_FAIL';
// create pickup actions - adding pickup to volunteer
export const POST_PICKUP_START = 'POST_PICKUP_START';
export const POST_PICKUP_SUCCESS = 'POST_PICKUP_SUCCESS';
export const POST_PICKUP_FAIL = 'POST_PICKUP_FAIL';
// update pickup actions
export const PUT_PICKUP_START = 'PUT_PICKUP_START';
export const PUT_PICKUP_SUCCESS = 'PUT_PICKUP_SUCCESS';
export const PUT_PICKUP_FAIL = 'PUT_PICKUP_FAIL';
// delete pickup actions - removes pickup from volunteer
export const REMOVE_PICKUP_START = 'REMOVE_PICKUP_START';
export const REMOVE_PICKUP_SUCCESS = 'REMOVE_PICKUP_SUCCESS';
export const REMOVE_PICKUP_FAIL = 'REMOVE_PICKUP_FAIL';

export const getAllPickups = (props) => dispatch => {
    dispatch({type: GET_ALLPICKUPS_START});
    axiosWithAuth()
    .get('/api/pickups')
    .then(res => {
        dispatch({type: GET_ALLPICKUPS_SUCCESS, payload: res.data})
    })
    .catch(err =>
        dispatch({type: GET_ALLPICKUPS_FAIL, payload: err}))
}

export const getPickupById = (props) => dispatch => {
    dispatch({type: GET_PICKUPBYID_START});
    axiosWithAuth()
    .get(`/api/pickups/${id}`)
    .then(res => {
        dispatch({type: GET_PICKUPBYID_SUCCESS, payload: res.data})
    })
    .catch(err =>
        dispatch({type: GET_PICKUPBYID_FAIL, payload: err}))
}

export const getPickupByVolId = (props) => dispatch => {
    dispatch({type: GET_PICKUPBYVOLID_START});
    axiosWithAuth()
    .get(`/api/pickups/volunteer/${id}`)
    .then(res => {
        dispatch({type: GET_PICKUPBYVOLID_SUCCESS, payload: res.data})
    })
    .catch(err =>
        dispatch({type: GET_PICKUPBYVOLID_FAIL, payload: err}))
}

export const editPickup = (props) => dispatch => {
    dispatch({type: PUT_PICKUP_START});
    axiosWithAuth()
    .put(`/api/pickups/${id}`, pickup)
    .then(res => {
        dispatch({type: PUT_PICKUP_SUCCESS, payload: res.data})
    })
    .catch(err =>
        dispatch({type: PUT_PICKUP_FAIL, payload: err}))
}

export const deletePickup = (props) => dispatch => {
    dispatch({type: REMOVE_PICKUP_START});
    axiosWithAuth()
    .delete(`/api/pickups/${id}`, food)
    .then(res => {
        dispatch({type: REMOVE_PICKUP_SUCCESS, payload: res.data})
    })
    .catch(err =>
        dispatch({type: REMOVE_PICKUP_FAIL}))
}