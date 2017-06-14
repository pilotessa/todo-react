export default (function () {
    const TASKS_KEY = 'TODO_REACT';

    function readData() {
        const todoListStringified = localStorage.getItem(TASKS_KEY) || '[]',
            todoListParsed = JSON.parse(todoListStringified.trim()),
            data = Array.isArray(todoListParsed) ? todoListParsed : [todoListParsed];
        return data;
    }

    function updateData(data) {
        const todoListStringified = JSON.stringify(data);
        localStorage.setItem(TASKS_KEY, todoListStringified);
    }

    return {
        readData,
        updateData
    }
})();