import React, {PureComponent} from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Card} from 'react-md';
import TodoNewTaskForm from "./TodoNewTaskForm";
import TodoTasks from "./TodoTasks";
import {loadTasks, addTask, deleteTask, toggleTaskState, clearCompleted} from "./../../reducers-and-actions/todo/todoAction";

class TodoList extends PureComponent {
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
        return (
            <Card>
                <TodoNewTaskForm addTask={this.props.addTask} />
                <TodoTasks
                    tasks={this.props.tasks}
                    show={this.state.show}
                    deleteTask={this.props.deleteTask}
                    toggleTaskState={this.props.toggleTaskState}
                    showAll={this.showAll}
                    showActive={this.showActive}
                    showCompleted={this.showCompleted}
                    clearCompleted={this.props.clearCompleted}
                />
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