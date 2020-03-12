import axios from 'axios';
// register actions
export const POST_VREGISTER_START = 'POST_VREGISTER_START';
export const POST_VREGISTER_SUCCESS = 'POST_VREGISTER_SUCCESS';
export const POST_VREGISTER_FAIL = 'POST_VREGISTER_FAIL';
// login actions
export const POST_VLOGIN_START = 'POST_VLOGIN_START';
export const POST_VLOGIN_SUCCESS = 'POST_VLOGIN_SUCCESS';
export const POST_VLOGIN_FAIL = 'POST_VLOGIN_FAIL';
// read actions
export const GET_ALLVOLUNTEERS_START = 'GET_ALLVOLUNTEERS_START';
export const GET_ALLVOLUNTEERS_SUCCESS = 'GET_ALLVOLUNTEERS_SUCCESS';
export const GET_ALLVOLUNTEERS_FAIL = 'GET_ALLVOLUNTEERS_FAIL';
export const GET_VOLBYID_START = 'GET_VOLBYID_START';
export const GET_VOLBYID_SUCCESS = 'GET_VOLBYID_SUCCESS';
export const GET_VOLBYID_FAIL = 'GET_VOLBYID_FAIL';
// edit actions
export const PUT_VOLUNTEER_START = 'PUT_VOLUNTEER_START';
export const PUT_VOLUNTEER_SUCCESS = 'PUT_VOLUNTEER_SUCCESS';
export const PUT_VOLUNTEER_FAIL = 'PUT_VOLUNTEER_FAIL';
// delete actions
export const REMOVE_VOLUNTEER_START = 'REMOVE_VOLUNTEER_START';
export const REMOVE_VOLUNTEER_SUCCESS = 'REMOVE_VOLUNTEER_SUCCESS';
export const REMOVE_VOLUNTEER_FAIL = 'REMOVE_VOLUNTEER_FAIL';

export const registerVolunteer = (props) => dispatch => {
    dispatch({type: POST_VREGISTER_START});
    axios
    .post('https://bw-replate2.herokuapp.com/api/auth/volunteer/register')
    .then(res => {
        dispatch({type: POST_VREGISTER_SUCCESS, payload: res.data})
    })
    .catch(err =>
        dispatch({type: POST_VREGISTER_FAIL, payload: err}))
}

export const loginVolunteer = (props) => dispatch => {
    dispatch({type: POST_VLOGIN_START});
    axios
    .post('https://bw-replate2.herokuapp.com/api/auth/volunteer/login')
    .then(res => {
        dispatch({type: POST_VLOGIN_SUCCESS, payload: res.data})
    })
    .catch(err =>
        dispatch({type: POST_VLOGIN_FAIL, payload: err}))
}
export const getAllVol = (props) => dispatch => {
    dispatch({type: GET_ALLVOLUNTEERS_START});
    axiosWithAuth()
    .get('/users/volunteer')
    .then(res => {
        dispatch({type: GET_ALLVOLUNTEERS_SUCCESS, payload: res.data})
    })
    .catch(err =>
        dispatch({type: GET_ALLVOLUNTEERS_FAIL, payload: err}))
}

export const getVolById = (props) => dispatch => {
    dispatch({type: GET_VOLBYID_START});
    axiosWithAuth()
    .get(`/users/volunteer/${id}`)
    .then(res => {
        dispatch({type: GET_VOLBYID_SUCCESS, payload: res.data})
    })
    .catch(err =>
        dispatch({type: GET_VOLBYID_FAIL, payload: err}))
}

export const editVolunteer = (props) => dispatch => {
    dispatch({type: PUT_VOLUNTEER_START});
    axiosWithAuth()
    .put(`/users/volunteer/${id}`, volunteer)
    .then(res => {
        console.log('edit', res)
        dispatch({type: PUT_VOLUNTEER_SUCCESS, payload: res.data})
    })
    .catch(err =>
        dispatch({type: PUT_VOLUNTEER_FAIL, payload: err}))
}

export const deleteVolunteer = (props) => dispatch => {
    dispatch({type: REMOVE_VOLUNTEER_START});
    axiosWithAuth()
    .delete(`/users/volunteer/${id}`, volunteer)
    .then(res => {
        dispatch({type: REMOVE_VOLUNTEER_SUCCESS, payload: res.data})
    })
    .catch(err =>
        dispatch({type: REMOVE_VOLUNTEER_FAIL, payload: err}))
}