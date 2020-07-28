const {
	store,
	createTask,
	deleteTask,
	resetTaskList,
} = require('./reduxStoreActionReducer.js');

console.log('Initial State: ', store.getState());

store.subscribe(() => console.log(store.getState()));

console.log('State creations: ')
store.dispatch(createTask('walk dog'));
store.dispatch(createTask('feed cat'));
store.dispatch(createTask('talk to bird'));
store.dispatch(createTask('watch goldfish'));

console.log('State deletions: ')
store.dispatch(deleteTask(0));
store.dispatch(deleteTask(1));

console.log('State reset: ')
store.dispatch(resetTaskList());
