import axios from 'axios';
// register actions
export const POST_BREGISTER_START = 'POST_BREGISTER_START';
export const POST_BREGISTER_SUCCESS = 'POST_BREGISTER_SUCCESS';
export const POST_BREGISTER_FAIL = 'POST_BREGISTER_FAIL';
// log in actions
export const POST_BLOGIN_START = 'POST_BLOGIN_START';
export const POST_BLOGIN_SUCCESS = 'POST_BLOGIN_SUCCESS';
export const POST_BLOGIN_FAIL = 'POST_BLOGIN_FAIL';

export const registerBusiness = (props) => dispatch => {
    dispatch({type: POST_BREGISTER_START});
    axios
    .post('https://bw-replate2.herokuapp.com/api/auth/business/register')
    .then(res => {
        dispatch({type: POST_BREGISTER_SUCCESS, payload: res})
    })
    .catch(err =>
        dispatch({type: POST_BREGISTER_FAIL, payload: err}))
}

export const loginBusiness = (props) => dispatch => {
    dispatch({type: POST_BLOGIN_START});
    axios
    .post('https://bw-replate2.herokuapp.com/api/auth/business/login')
    .then(res => {
        dispatch({type: POST_BLOGIN_SUCCESS, payload: res})
    })
    .catch(err =>
        dispatch({type: POST_BLOGIN_FAIL, payload: err}))
}