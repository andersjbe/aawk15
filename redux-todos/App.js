const {
	store,
	createTask,
	deleteTask,
	resetTaskList,
} = require('./reduxStoreActionReducer.js');

console.log('Initial State: ', store.getState());

store.dispatch(createTask('walk dog'));
store.dispatch(createTask('feed cat'));
store.dispatch(createTask('talk to bird'));
store.dispatch(createTask('watch goldfish'));

console.log('After dispatches: ', store.getState());

store.dispatch(deleteTask(0));
store.dispatch(deleteTask(1));

console.log('After deletions: ', store.getState());

store.dispatch(resetTaskList());

console.log('After reset: ', store.getState());
