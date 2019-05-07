import * as types from './../constants/todos';

export const addTodo = text => ({
    type: types.ADD_TODO,
    payload: {
        text
    }
});

export const completeTodo = id => ({
    type: types.COMPLETE_TODO,
    payload: {
        id
    }
});

export const updateTodo = (id, text) => ({
    type: types.UPDATE_TODO,
    payload: {
        id,
        text
    }
});

export const deleteTodo = id => ({
    type: types.DELETE_TODO,
    payload: {
        id
    }
});
