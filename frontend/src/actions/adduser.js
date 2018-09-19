import axios from 'axios';
import { ADD_USER, FETCH_USER } from './types';

export const addUser = (user) => dispatch => {
    axios.post('/api/users/adduser', user)
        .then(user => {
            dispatch({
                type: ADD_USER,
                payload: user
            });
        })
}

export const fetchUser = () => dispatch => {
    axios.get('/api/users/getuser')
        .then(user => {
            dispatch({
                type: FETCH_USER,
                payload: user.data
            });
        })
}

