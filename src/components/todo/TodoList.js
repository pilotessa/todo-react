import React, {Component} from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Card, Divider, FontIcon, List, ListItem } from 'react-md';
import MenuButton from 'react-md/lib/Menus/MenuButton';
import TodoNewTaskForm from "./TodoNewTaskForm";
import TodoTask from "./TodoTask";
import {loadTasks, addTask, deleteTask, toggleTaskState, clearCompleted} from "./../../reducers-and-actions/todo/todoAction";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: window.location.hash === '#active' || window.location.hash === '#completed' ? window.location.hash.replace('#', '') : 'all'
        };
    }

    componentDidMount() {
        this.props.loadTasks();
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

    render() {
        const tasks = this.props.tasks,
            activeTasks = tasks.filter(task => task.active),
            tasksSection = tasks.map(task => <TodoTask key={task.id} task={task} deleteTask={this.props.deleteTask} toggleTaskState={this.props.toggleTaskState} />),
            className = 'list__show-' + this.state.show;

    	let listSection = null;
    	if (tasks.length) {
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
                                onClick={this.props.clearCompleted}
                            />
                        </MenuButton>
                        </ListItem>
                    </List>
                </div>
    		);
    	}

        return (
            <Card>
                <TodoNewTaskForm addTask={this.props.addTask} />
                {listSection}
            </Card>
        );
    }
}

function mapStateToProps(storeState) {
    return {
        tasks: storeState.todo.tasks
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadTasks: bindActionCreators(loadTasks, dispatch),
        addTask: bindActionCreators(addTask, dispatch),
        deleteTask: bindActionCreators(deleteTask, dispatch),
        toggleTaskState: bindActionCreators(toggleTaskState, dispatch),
        clearCompleted: bindActionCreators(clearCompleted, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);