import { ADD_USER, FETCH_USER } from '../actions/types';

const initialState = {
    users: [],
    user: {}
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case ADD_USER:
            return {
                ...state,
                users: action.payload
            }
        case FETCH_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}