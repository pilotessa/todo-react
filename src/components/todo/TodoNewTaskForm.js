import React, {PureComponent} from "react";
import { Dialog, TextField } from 'react-md';

class TodoNewTaskForm extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            value: '',
            active: true,
            showDialog: false
        }
    }

    onInputChanged = (value, event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    onKeyPressed = event => {
        if (event.keyCode === 13) {
            if (!this.state.value) {
                this.openDialog();
                return;
            }

            this.props.addTask({...this.state});
            this.setState({value: ''});
        }
    }

    openDialog = () => {
        this.setState({ showDialog: true });
    }

    closeDialog = () => {
        this.setState({ showDialog: false });
    }

    render() {
        return (
            <div className="md-divider-border md-divider-border--bottom">
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
                <Dialog
                    id="speedBoost"
                    visible={this.state.showDialog}
                    title="Error"
                    onHide={this.closeDialog}
                    aria-labelledby="speedBoostDescription"
                    modal
                    actions={[{
                        onClick: this.closeDialog,
                        primary: true,
                        label: 'Ok',
                    }]}
                >
                    <p className="md-color--secondary-text">
                        Empty task
                    </p>
                </Dialog>
            </div>
        );
    }
}

export default TodoNewTaskForm;