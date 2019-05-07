import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import Input from './../components/Input';
import { addTodo } from '../actions/todos';
import { setUser } from '../actions/user';
import Background from "../components/Background";
import UserWelcome from "../components/UserWelcome";

const mapStateToProps = state => ({
    todos: state.todos,
    user: state.user,
    todosCount: state.todos.filter(item => !item.completed).length
});

class App extends Component {
    handleCreateTodo = text => {
        this.props.addTodo(text);
    };

    setUserName = name => {
        this.props.setUser(name);
    };

    render() {
        const { todos, todosCount, user } = this.props;

        return (
            <Fragment>
                <Background />
                {user ? (
                    <Fragment>
                        <UserWelcome user={user} />
                        <div className="panel">
                            <div className="panel-header">
                                TODO's: {todosCount}
                            </div>
                            <TodoList todos={todos} />
                            <div className="panel-footer">
                                <Input onSave={this.handleCreateTodo} creating={true} placeholder="New TODO" />
                            </div>
                        </div>
                        <div className="hint">
                            <p>Double-click to edit</p>
                            <p>Enter to submit</p>
                        </div>
                    </Fragment>
                ) : (
                    <div className="panel vertical-middle">
                        <div className="panel-header">
                            First, enter your name
                        </div>
                        <div className="panel-footer">
                            <Input onSave={this.setUserName} placeholder="Name" />
                        </div>
                    </div>
                )}
            </Fragment>
        );
    }
}

export default App = connect(
    mapStateToProps, {
        addTodo,
        setUser
    }
)(App);
