import * as actions from "./../../constants/todo/actions";
import _ from 'lodash';
import TodoLocalStorage from "../../dao/todo/TodoLocalStorage";

const INITIAL_STATE = {
    tasks: []
};

function todoReducer(state = INITIAL_STATE, action) {
    if (action.type === actions.LOAD_TASKS) {
        const tasks = TodoLocalStorage.readData();

        return {...state, tasks};
    } else if (action.type === actions.DELETE_TASK) {
        const task = action.payload;

        if (~state.tasks.indexOf(task)) {
            const updatedTasks = _.without(state.tasks, task);

            TodoLocalStorage.updateData(updatedTasks);
            return {...state, tasks: updatedTasks};
        }
    } else if (action.type === actions.ADD_TASK) {
        const shortid = require('shortid'),
            id = shortid.generate(),
            taskInfo = action.payload,
            newTask = {...taskInfo, id},
            updatedTasks = [...state.tasks, newTask];

        TodoLocalStorage.updateData(updatedTasks);
        return {...state, tasks: updatedTasks};
    } else if (action.type === actions.TOGGLE_TASK_STATE) {
        const task = action.payload;

        if (~state.tasks.indexOf(task)) {
            task.active = !task.active;

            const updatedTasks = [...state.tasks];

            TodoLocalStorage.updateData(updatedTasks);
            return {...state, tasks: updatedTasks};
        }
    } else if (action.type === actions.CLEAR_COMPLETED) {
        const updatedTasks = state.tasks.filter(task => task.active);

        TodoLocalStorage.updateData(updatedTasks);
        return {...state, tasks: updatedTasks};
    }

    return state;
}

export default todoReducer;