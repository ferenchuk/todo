import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
    render() {
        const { todos } = this.props;

        const todoList = todos.map((todo, index) => (
            <TodoItem {...todo} key={index}/>
        ));

        return (
            <div className="list">
                {todoList}
            </div>
        );
    }
}
