import React, {PureComponent} from "react";
import { Divider, FontIcon, List, ListItem } from 'react-md';
import MenuButton from 'react-md/lib/Menus/MenuButton';
import TodoTask from "./TodoTask";

class TodoTasks extends PureComponent {
    render() {
        const tasks = this.props.tasks,
            activeTasks = tasks.filter(task => task.active),
            tasksSection = tasks.map(task => <TodoTask key={task.id} task={task} deleteTask={this.props.deleteTask} toggleTaskState={this.props.toggleTaskState} />),
            className = 'list__show-' + this.props.show;

    	let listSection = null;
    	if (tasks.length) {
    		listSection = (
    		    <div>
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
                                leftIcon={this.props.show === 'all' ? <FontIcon>radio_button_checked</FontIcon> : <FontIcon>radio_button_unchecked</FontIcon>}
                                primaryText="All"
                                active={this.props.show === 'all'}
                                onClick={this.props.showAll}
                            />
                            <ListItem
                                leftIcon={this.props.show === 'active' ? <FontIcon>radio_button_checked</FontIcon> : <FontIcon>radio_button_unchecked</FontIcon>}
                                primaryText="Active"
                                active={this.props.show === 'active'}
                                onClick={this.props.showActive}
                            />
                            <ListItem
                                leftIcon={this.props.show === 'completed' ? <FontIcon>radio_button_checked</FontIcon> : <FontIcon>radio_button_unchecked</FontIcon>}
                                primaryText="Completed"
                                active={this.props.show === 'completed'}
                                onClick={this.props.showCompleted}
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

        return listSection;
    }
}

export default TodoTasks;