import axios from 'axios';

export const POST_BREGISTER_START = 'POST_BREGISTER_START';
export const POST_BREGISTER_SUCCESS = 'POST_BREGISTER_SUCCESS';
export const POST_BREGISTER_FAIL = 'POST_BREGISTER_FAIL';

export const registerBusiness = (props) => dispatch => {
    dispatch({type: POST_BREGISTER_START});
    axios
    .post()
    .then(res => {
        dispatch({type: POST_BREGISTER_SUCCESS, payload: res})
    })
    .catch(err =>
        dispatch({type: POST_BREGISTER_FAIL, payload: err}))
}