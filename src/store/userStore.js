import {observable, action, autorun, computed} from 'mobx';
import * as mobx from 'mobx';



class UserStore {
	@observable userobj = {
		registerState :false,
		loginState:false,
		redireactUrl:'',
		user:null
	};
    // @observable pendingRequests = 0;

    constructor() {
        mobx.autorun(() => console.log(this.report), 'aaaa');
    }

	// @computed get completedTodosCount() {
    // 	return this.todos.filter(
	// 		todo => todo.completed === true
	// 	).length;
    // }

	// @computed get report() {
	// 	if (this.todos.length === 0)
	// 		return "<none>";
	// 	return `Next todo: "${this.todos[0].task}". ` +
	// 		`Progress: ${this.completedTodosCount}/${this.todos.length}`;
	// }

	// addTodo(task) {
	// 	this.todos.push({
	// 		task: task,
	// 		completed: false,
	// 		assignee: null
	// 	});
	// }
}

export default UserStore