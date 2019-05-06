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
            <div className="editing">
                <TodoInput text={text} onSave={(text) => this.handleSave(id, text)} />
            </div>
        ) : (
            <div className={`item ${completed ? 'completed' : ''}`}>
                <label>
                    <input type="checkbox" checked={completed} onChange={this.completeTodo} />
                    <span className="checkmark" />
                </label>
                <label onDoubleClick={this.handleDoubleClick}>
                    {text}
                </label>
                <i className="fas fa-times delete-item" onClick={this.deleteTodo} />
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
