import React, {Component} from "react";
import { Card, Divider, FontIcon, List, ListItem, TextField } from 'react-md';
import MenuButton from 'react-md/lib/Menus/MenuButton';
import _ from 'lodash';
import TodoTask from "./TodoTask";

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [
                {id: 0, value: "Test task 1", active: true},
                {id: 1, value: "Test task 2", active: true},
                {id: 2, value: "Test task 3", active: false}
            ]
        }
    }

    deleteTask = task => {
    	const tasks = _.without(this.state.tasks, task);
    	this.setState({tasks});
    }

    render() {
        const activeTasks = this.state.tasks.filter(task => task.active),
            tasksSection = this.state.tasks.map(task => <TodoTask key={task.id} task={task} deleteTask={this.deleteTask} />);

    	let listSection = null;
    	if (this.state.tasks.length) {
    		listSection = (
    		    <div>
                    <Divider />
                    <List>
                        {tasksSection}
                        <Divider />
                        <ListItem
                            primaryText={activeTasks.length + ' item(s) left'}
                        >
                        <MenuButton
                              id="taskActions"
                              icon
                              buttonChildren="more_horiz"
                              tooltipLabel="Actions"
                        >
                            <ListItem leftIcon={<FontIcon>radio_button_checked</FontIcon>} primaryText="All" active={true} />
                            <ListItem leftIcon={<FontIcon>radio_button_unchecked</FontIcon>} primaryText="Active" />
                            <ListItem leftIcon={<FontIcon>radio_button_unchecked</FontIcon>} primaryText="Completed" />
                            <Divider />
                            <ListItem leftIcon={<FontIcon>close</FontIcon>} primaryText="Clear completed" />
                        </MenuButton>
                        </ListItem>
                    </List>
                </div>
    		);
    	}

        return (
            <Card>
                <TextField
                    id="new"
                    block
                    paddedBlock
                    customSize="title"
                    placeholder="What needs to be done?"
                />
                {listSection}
            </Card>
        );
    }
}

export default TodoList;