import axios from 'axios';

export const axiosWithAuth = () => {
    return axios.create({
        baseURL: 'https://bw-replate2.herokuapp.com/api',
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
}