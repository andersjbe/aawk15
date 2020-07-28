const { createStore } = require('redux');

const CREATE_TASK = 'CREATE_TASK';
const DELETE_TASK = 'DELETE_TASK';
const RESET_TASK_LIST = 'RESET_TASK_LIST';

const tasksReducer = (oldState = [], action) => {
	const newState = oldState.slice(0);
	switch (action.type) {
		case CREATE_TASK:
			newState.push({ message: action.taskMessage });
			return newState;
		case DELETE_TASK:
			return [
				...newState.slice(0, action.id),
				...newState.slice(action.id + 1),
			];
		case RESET_TASK_LIST:
			return action.emptyTaskList;
		default:
			return oldState;
	}
};

const store = createStore(tasksReducer);

const createTask = taskMessage => {
	debugger;
	return {
		type: CREATE_TASK,
		taskMessage,
	};
};

const deleteTask = taskId => {
	debugger;
	return {
		type: DELETE_TASK,
		id: taskId,
	};
};

const resetTaskList = () => {
	debugger;
	return {
		type: RESET_TASK_LIST,
		emptyTaskList: [],
	};
};

module.exports = {
	store,
	createTask,
	deleteTask,
	resetTaskList,
};
