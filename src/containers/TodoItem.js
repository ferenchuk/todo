import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoInput from './../components/Input';
import {
    updateTodo,
    completeTodo,
    deleteTodo
} from './../actions/todos';

class TodoItem extends Component {
    state = {
        editing: false
    };

    handleDoubleClick = () => {
       this.setState({editing: true})
    };

    handleSave = (id, text) => {
        if (text.length === 0) {
            this.props.deleteTodo(id);
        } else {
            this.props.updateTodo(id, text);
        }
        this.setState({ editing: false })
    };

    completeTodo = () => {
        this.props.completeTodo(this.props.id);
    };

    deleteTodo = () => {
        this.props.deleteTodo(this.props.id);
    };


    render() {
        const { id, text, completed } = this.props;
        let item = this.state.editing ? (
            <TodoInput text={text} onSave={(text) => this.handleSave(id, text)} />
        ) : (
            <div className={completed ? 'completed' : ''}>
                <input type="checkbox" checked={completed} onChange={this.completeTodo} />
                <label onDoubleClick={this.handleDoubleClick}>
                    {text}
                </label>
                <span onClick={this.deleteTodo}>[x]</span>
            </div>
        );
        return (
            <>
                {item}
            </>
        );
    }
}

export default connect(null, {
    updateTodo,
    completeTodo,
    deleteTodo
})(TodoItem);
