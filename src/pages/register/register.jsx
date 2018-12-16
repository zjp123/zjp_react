import React,{ Component } from 'react';
import {observable, action, computed, set} from 'mobx';
import {observer} from 'mobx-react';
import * as mobx from 'mobx';
import axios from 'axios'
// import * as React from 'react';
// import ReactDOM from 'react-dom';
// import { Button } from '../../components/Button';
import './register.less';
// import BasicExample from '../../router/index'

// var app = document.getElementById('app')
// app.innerHTML = 'singup'
// console.log('home')
// class TodoStore {
// 	todos = [];

// 	get completedTodosCount() {
//     	return this.todos.filter(
// 			todo => todo.completed === true
// 		).length;
//     }

// 	report() {
// 		if (this.todos.length === 0)
// 			return "<none>";
// 		return `Next todo: "${this.todos[0].task}". ` +
// 			`Progress: ${this.completedTodosCount}/${this.todos.length}`;
// 	}

//     addTodo(task) {
// 		this.todos.push({
// 			task: task,
// 			completed: false,
//             assignee: null
// 		});
// 	}
// }

// const todoStore = new TodoStore();

// todoStore.addTodo("read MobX tutorial");
// console.log(todoStore.report());

// todoStore.addTodo("try MobX");
// console.log(todoStore.report());

// todoStore.todos[0].completed = true;
// console.log(todoStore.report());

// todoStore.todos[1].task = "try MobX in own project";
// console.log(todoStore.report());

// todoStore.todos[0].task = "grok MobX tutorial";
// console.log(todoStore.report());

// class ObservableTodoStore {
// 	@observable todos = [];
//     @observable pendingRequests = 0;

//     constructor() {
//         mobx.autorun(() => console.log(this.report));
//     }

// 	@computed get completedTodosCount() {
//     	return this.todos.filter(
// 			todo => todo.completed === true
// 		).length;
//     }

// 	@computed get report() {
// 		if (this.todos.length === 0)
// 			return "<none>";
// 		return `Next todo: "${this.todos[0].task}". ` +
// 			`Progress: ${this.completedTodosCount}/${this.todos.length}`;
// 	}

// 	addTodo(task) {
// 		this.todos.push({
// 			task: task,
// 			completed: false,
// 			assignee: null
// 		});
// 	}
// }


// const observableTodoStore = new ObservableTodoStore();
// // observableTodoStore.addTodo("read MobX tutorial");
// // observableTodoStore.addTodo("try MobX");
// // observableTodoStore.todos[0].completed = true;
// // observableTodoStore.todos[1].task = "try MobX in own project";
// // observableTodoStore.todos[0].task = "grok MobX tutorial";

// @observer
// class TodoList extends React.Component {
//   render() {
//     const store = this.props.store;
//     return (
//       <div>
//         { store.report }
//         <ul>
//         { store.todos.map(
//           (todo, idx) => <TodoView todo={ todo } key={ idx } />
//         ) }
//         </ul>
//         { store.pendingRequests > 0 ? <marquee>Loading...</marquee> : null }
//         <button onClick={ this.onNewTodo }>New Todo</button>
//         <small> (double-click a todo to edit)</small>
//         {/* <RenderCounter /> */}
//       </div>
//     );
//   }

//   onNewTodo = () => {
//     this.props.store.addTodo(prompt('Enter a new todo:','coffee plz'));
//   }
// }

// @observer
// class TodoView extends React.Component {
//   render() {
//     const todo = this.props.todo;
//     return (
//       <li onDoubleClick={ this.onRename }>
//         <input
//           type='checkbox'
//           checked={ todo.completed }
//           onChange={ this.onToggleCompleted }
//         />
//         { todo.task }
//         { todo.age?age:null }
//         { todo.assignee
//           ? <small>{ todo.assignee.name }</small>
//           : null
//         }
//         {/* <RenderCounter /> */}
//       </li>
//     );
//   }

//   onToggleCompleted = () => {
//     const todo = this.props.todo;
//     // todo.age = 18;
//     observableTodoStore.todos[0].age = 18;
//     observableTodoStore.set(age, 18);
//     set(observableTodoStore, { "age" : 18})
//     todo.completed = !todo.completed;
//   }

//   onRename = () => {
//     const todo = this.props.todo;
//     todo.task = prompt('Task name', todo.task) || todo.task;
//   }
// }

// TodoList.defaultProps={
//     store:observableTodoStore 
// };

class Register extends Component{

    constructor(props){
        super(props)
    }
    componentDidMount(){
        //30.27.10.55 
        //172.16.68.149
        axios.get('/api')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    }
    render(){

        return(
            <div className="aa">这是关于Register的页面</div>
        )
    }
}
export default Register

// ReactDOM.render(<Signup />, document.getElementById('app'));

