import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
    state = {
        text: this.props.text || ''
    };

    handleSubmit = event => {
        const text = event.target.value;
        if (event.which === 13) {
            this.props.onSave(text);
            this.setState({text: ''});
        }
    };

    handleChange = event => {
        this.setState({text: event.target.value});
    };

    handleBlur = event => {
        if (!this.props.creating) {
            this.props.onSave(event.target.value);
        }
    };

    render() {
        return (
            <input
                type="text"
                placeholder={this.props.placeholder}
                value={this.state.text}
                onChange={this.handleChange}
                onKeyDown={this.handleSubmit}
                onBlur={this.handleBlur}
                autoFocus={true}
            />
        );
    }
}

Input.propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    creating: PropTypes.bool
};
