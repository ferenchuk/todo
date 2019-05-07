import * as types from './../constants/user';

export const setUser = name => ({
    type: types.SET_USER,
    name
});
