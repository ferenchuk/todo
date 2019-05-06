import * as types from '../constants/todos';

const initialState = [];

export default function todos(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case types.ADD_TODO:
            return [
                ...state,
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    text: payload.text,
                    completed: false
                }
            ];

        case types.UPDATE_TODO:
            return state.map(todo =>
                todo.id === payload.id ? {...todo, text: payload.text} : todo
            );

        case types.COMPLETE_TODO:
            return state.map(todo =>
            todo.id === payload.id ? {...todo, completed: !todo.completed} : todo);

        case types.DELETE_TODO:
            return state.filter(todo =>
            todo.id !== payload.id);

        default: 
            return initialState;
    }
}
