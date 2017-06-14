import React, {Component} from "react";
import { Button, FontIcon, ListItem } from 'react-md';
import './TodoTask.css';

class TodoTask extends Component {
	onTaskDeleteClicked = () => {
		this.props.deleteTask(this.props.task);
	}

    render() {
        const taskIcon = this.props.task.active ? <FontIcon>check_box_outline_blank</FontIcon> : <FontIcon>check_box</FontIcon>,
            taskStyles = this.props.task.active ? {} : {textDecoration: 'line-through'};

        return (
            <ListItem className="task" leftIcon={taskIcon} primaryText={this.props.task.value} active={this.props.task.active} style={taskStyles}>
                <Button icon secondary onClick={this.onTaskDeleteClicked}>close</Button>
            </ ListItem>
        );
    }
}

export default TodoTask;