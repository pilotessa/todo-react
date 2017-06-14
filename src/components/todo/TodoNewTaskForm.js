import React, {Component} from "react";
import { TextField } from 'react-md';

class TodoNewTaskForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: '',
            active: true
        }
    }

    onInputChanged = (value, event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    onKeyPressed = event => {
        if (event.keyCode === 13) {
            if (!this.state.value) {
                alert('Empty field(s)');
                return;
            }

            this.props.addTask({...this.state});
            this.setState({value: '', active: true});
        }
    }

    render() {
        return (
            <TextField
                name="value"
                value={this.state.value}
                block
                paddedBlock
                customSize="title"
                placeholder="What needs to be done?"
                onChange={this.onInputChanged}
                onKeyDown={this.onKeyPressed}
            />
        );
    }
}

export default TodoNewTaskForm;