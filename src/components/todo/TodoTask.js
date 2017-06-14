import React, {Component} from "react";
import { Button, FontIcon, ListItem } from 'react-md';
import './TodoTask.css';

class TodoTask extends Component {
	onTaskClicked = () => {
        this.props.toggleTaskState(this.props.task);
	}

	onTaskDeleteClicked = event => {
		this.props.deleteTask(this.props.task);
		event.stopPropagation();
	}

    render() {
        const taskIcon = this.props.task.active ? <FontIcon>check_box_outline_blank</FontIcon> : <FontIcon>check_box</FontIcon>,
            taskStyles = this.props.task.active ? {} : {textDecoration: 'line-through'};

        return (
            <ListItem
                className="task"
                leftIcon={taskIcon}
                primaryText={this.props.task.value}
                active={this.props.task.active}
                onClick={this.onTaskClicked}
                style={taskStyles}
            >
                <Button icon secondary onClick={this.onTaskDeleteClicked}>close</Button>
            </ ListItem>
        );
    }
}

export default TodoTask;