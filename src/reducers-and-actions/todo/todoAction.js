import * as actions from "./../../constants/todo/actions";

export function loadTasks() {
    return {
        type: actions.LOAD_TASKS,
        payload: null
    }
}

export function addTask(taskInfo) {
    return {
        type: actions.ADD_TASK,
        payload: taskInfo
    }
}

export function deleteTask(task) {
    return {
        type: actions.DELETE_TASK,
        payload: task
    }
}

export function toggleTaskState(task) {
    return {
        type: actions.TOGGLE_TASK_STATE,
        payload: task
    }
}

export function clearCompleted() {
    return {
        type: actions.CLEAR_COMPLETED,
        payload: null
    }
}