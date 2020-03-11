import axios from 'axios';

export const POST_VREGISTER_START = 'POST_VREGISTER_START';
export const POST_VREGISTER_SUCCESS = 'POST_VREGISTER_SUCCESS';
export const POST_VREGISTER_FAIL = 'POST_VREGISTER_FAIL';

export const registerVolunteer = (props) => dispatch => {
    dispatch({type: POST_VREGISTER_START});
    axios
    .post()
    .then(res => {
        dispatch({type: POST_VREGISTER_SUCCESS, payload: res})
    })
    .catch(err =>
        dispatch({type: POST_VREGISTER_FAIL, payload: err}))
}
