import React, {Component} from "react";
import { Card, Divider, FontIcon, List, ListItem } from 'react-md';
import MenuButton from 'react-md/lib/Menus/MenuButton';
import _ from 'lodash';
import TodoLocalStorage from "../../dao/todo/TodoLocalStorage";
import TodoNewTaskForm from "./TodoNewTaskForm";
import TodoTask from "./TodoTask";

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.storage = TodoLocalStorage;

        this.state = {
            tasks: this.storage.readData(),
            show: window.location.hash === '#active' || window.location.hash === '#completed' ? window.location.hash.replace('#', '') : 'all'
        };
    }

    addTask = taskInfo => {
    	const newTask = {...taskInfo, id: this.state.tasks.length},
    	    tasks = this.state.tasks.concat([newTask]);

        this.storage.updateData(tasks);
    	this.setState({tasks});
    }

    toggleTaskState = task => {
        const tasks = Array.from(this.state.tasks);

        task.active = !task.active;

        this.storage.updateData(tasks);
        this.setState({tasks});
    }

    deleteTask = task => {
    	const tasks = _.without(this.state.tasks, task);

        this.storage.updateData(tasks);
    	this.setState({tasks});
    }

    showAll = () => {
        window.location.hash = '#all';
        this.setState({show: 'all'});
    }

    showActive = () => {
        window.location.hash = '#active';
        this.setState({show: 'active'});
    }

    showCompleted = () => {
        window.location.hash = '#completed';
        this.setState({show: 'completed'});
    }

    clearCompleted = () => {
        const tasks = this.state.tasks.filter(task => task.active);

        this.storage.updateData(tasks);
        this.setState({tasks});
    }

    render() {
        const activeTasks = this.state.tasks.filter(task => task.active),
            tasksSection = this.state.tasks.map(task => <TodoTask key={task.id} task={task} deleteTask={this.deleteTask} toggleTaskState={this.toggleTaskState} />),
            className = 'list__show-' + this.state.show;

    	let listSection = null;
    	if (this.state.tasks.length) {
    		listSection = (
    		    <div>
                    <Divider />
                    <List className={className}>
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
                            <ListItem
                                leftIcon={this.state.show === 'all' ? <FontIcon>radio_button_checked</FontIcon> : <FontIcon>radio_button_unchecked</FontIcon>}
                                primaryText="All"
                                active={this.state.show === 'all'}
                                onClick={this.showAll}
                            />
                            <ListItem
                                leftIcon={this.state.show === 'active' ? <FontIcon>radio_button_checked</FontIcon> : <FontIcon>radio_button_unchecked</FontIcon>}
                                primaryText="Active"
                                active={this.state.show === 'active'}
                                onClick={this.showActive}
                            />
                            <ListItem
                                leftIcon={this.state.show === 'completed' ? <FontIcon>radio_button_checked</FontIcon> : <FontIcon>radio_button_unchecked</FontIcon>}
                                primaryText="Completed"
                                active={this.state.show === 'completed'}
                                onClick={this.showCompleted}
                            />
                            <Divider />
                            <ListItem
                                leftIcon={<FontIcon>close</FontIcon>}
                                primaryText="Clear completed"
                                onClick={this.clearCompleted}
                            />
                        </MenuButton>
                        </ListItem>
                    </List>
                </div>
    		);
    	}

        return (
            <Card>
                <TodoNewTaskForm addTask={this.addTask} />
                {listSection}
            </Card>
        );
    }
}

export default TodoList;