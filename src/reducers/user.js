import * as types from './../constants/user';

const initialState = '';

export default function user(state = initialState, action) {
    const { type, name } = action;
    switch(type) {
        case types.SET_USER:
            return state = name;

        default: 
            return state;
    }
}
