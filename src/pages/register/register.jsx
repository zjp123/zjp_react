import React,{ Component } from 'react';
import {action} from 'mobx';
import {observer, inject} from 'mobx-react';
import axios from 'axios'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
// import * as React from 'react';
// import ReactDOM from 'react-dom';
// import { Button } from '../../components/Button';
import './register.less';
import 'antd/dist/antd.css'
import typeDec from '../../unit/freshNavDingWei'
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
// import UserStore from '../../store/userStore'

import {
    Form, Icon, Input, Button, Checkbox,Layout,Modal
  } from 'antd';

const {
  Footer,Content,
} = Layout;


const FormItem = Form.Item;
// const stores = new UserStore()
require('jquery')


@inject('userStore')
@observer
class RedirectModal extends Component {
    // state = { visible: false }
    //registerState
  
    // showModal = () => {
    //   this.setState({
    //     visible: true,
    //   });
    // }
   

    @action.bound 
    handleOk = (e) => {
    //   console.log(e);
     
        
        this.props.userStore.userobj.registerState = false;
        this.props.resetHandle();

    }
    
    @action.bound
    loginHandle(){
        this.props.userStore.userobj.registerState = false;
        this.props.resetHandle();
        
        this.props.history.push('/login')
    }
  
    componentWillReceiveProps(){
        // console.log(this.props)
    }
    render() {
        console.log(this.props)
      return (
        <div>
          
          <Modal
            title="提示"
            visible={this.props.registerState}
            onOk={this.handleOk}
            footer={[
                <Button key="submit" type="primary" style={{marginRight:36}}  onClick={this.handleOk}>
                确定
                </Button>,
                <Button key="login" type="primary"  onClick={this.loginHandle}>
                去登录
                </Button>
               
            ]}
          >
            <p>注册成功！ 相遇即是缘分。</p>
           
          </Modal>
        </div>
      );
    }
  }

  RedirectModal = withRouter(RedirectModal)


@inject('userStore')
@typeDec
@observer
class NormalLoginForm extends Component {
    constructor(props){

        super(props)
        // console.log(this.props)
        // let pathname = this.props.location.pathname
        // if(pathname.length==1){
        //     pathname = pathname
        // }else{
        //     pathname = pathname.slice(1)

        // }
        // this.props.typeHandle(pathname)


        
    }

    getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    @action
    setRegisterState(){

        this.props.userStore.userobj.registerState = true;


    }

    registerHandle(csrftoken){
        const username = this.userName.props.value
        const password = this.password.props.value
        const confirmpassword = this.confirmpassword.props.value
        let that = this
        axios({
            method: 'post',
            url: '/api/register',
            data: {
                username:username,
                password:password,
                confirmpassword:confirmpassword
            },
            transformRequest: [function (data) {//一定要注意在post提交时  一定要转为formdata的形式
                let ret = ''
                for (let it in data) {
                  ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                }
                return ret
            }],
            headers: {
                'X-CSRFToken':csrftoken,
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
            }).then(function (response) {
                console.log(response.data);
                const resdata = response.data;
                if(resdata.code==200){
                    console.log(that.props.userStore)
                    that.setRegisterState()
                    // this.props.store.user = true;
                    //Accept: application/json, text/javascript, */*; q=0.01
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        // console.log(err)

        if (!err) {//没有错误的情况下

            axios.get('/api/register')
            .then((res)=>{
                        // this.usrInfoSending(new Date().getTime())
                        let csrftoken = this.getCookie('csrftoken');
                        console.log(csrftoken)
                        this.registerHandle(csrftoken)
                    
                        
                    })
            .catch((err) => {
                        // this.networkErr(err);
                        console.log(err)

            });
          
    
        }
      });

    }
    
    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
          callback('Two passwords that you enter is inconsistent!');
        } else {
          callback();
        }
      }
    
    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value ) {
          form.validateFields(['confirm'], { force: true });
        }
        callback();
      }

    resetHandle = (value) => {
        console.log(value);
        this.props.form.setFieldsValue({
            password: '',
        });
        this.props.form.setFieldsValue({
            confirm: '',
        });
      }

    render() {
      const { getFieldDecorator } = this.props.form;
      const { registerState }= this.props.userStore.userobj;
      
      console.log('000'+ registerState)
      return (
        <Layout id="register-layout">
            <Content>
                <div className="imgwrap">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545039718757&di=d85e9e2f1464022876c7202d13e948fc&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F9%2F5845306bc7a27.jpg"/>
                </div>
            </Content>
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem className="inputType">
                    {getFieldDecorator('userName', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                    <Input className="ant-input" ref={(input) => this.userName = input} id="userName" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem label="Password" className="inputType">
                    {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                    <Input className="ant-input" id="password" ref={(input) => this.password = input} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem label="Confirm Password" className="inputType">
                    {getFieldDecorator('confirm', {
                        rules: [{
                        required: true, message: 'Please confirm your password!',
                        }, {
                        validator: this.compareToFirstPassword,
                        }],
                    })(
                        <Input className="ant-input" type="password" ref={(input) => this.confirmpassword = input} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} id="passwordAgain" placeholder="confirm password" onBlur={this.handleConfirmBlur} />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                    })(
                    <Checkbox id="remember">Remember me</Checkbox>
                    )}
                
                    <Button type="primary" id="register" htmlType="submit" className="ant-btn login-form-button ant-btn-primary" >
                    注册
                    </Button>
                    Or <Link to="/login">login now!</Link>
                </FormItem>
            </Form>
            <RedirectModal registerState={registerState} resetHandle={this.resetHandle}/>
            
        </Layout>
      );
    }
  }


const Register = Form.create()(NormalLoginForm);
export default Register

// ReactDOM.render(<Signup />, document.getElementById('app'));

