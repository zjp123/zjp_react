import React, { Component } from 'react';
// import * as React from 'react';
// import ReactDOM from 'react-dom';
// import { Button } from '../../components/Button';
import './login.less';
import 'antd/dist/antd.css'
import typeDec from '../../unit/freshNavDingWei'
import {observer, inject} from 'mobx-react';
import {action} from 'mobx';
import axios from 'axios'
import { withRouter } from 'react-router'

import {
    Form, Icon, Input, Button,Layout,Modal
  } from 'antd';

const {Content} = Layout;


const FormItem = Form.Item;

// import BasicExample from '../../router/index'

// var app = document.getElementById('app')
// app.innerHTML = 'login'
// console.log('home')
// @inject('userStore')
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
    // constructor(props, context) {
    //     super(props, context)
    //     this.state ={
    //         vsible:false
    //     }
        
    // }
    
    

    // @action.bound 
    handleOk = (e) => {
    //   console.log(e);
     
        
        // this.props.userStore.userobj.loginState = false;
        this.props.setloginModal()
        this.props.resetHandle();

    }
    
    // @action.bound
    loginHandlefn(){
        // this.props.userStore.userobj.loginState = false;
        this.props.setloginModal()

        
        this.props.resetHandle();
        
        this.props.history.push('/')
    }
  
    componentWillReceiveProps(){
        // console.log(666666666)
        // console.log(this.props)
      
    }
    render() {
        console.log(this.props)
        
        
      return (
        <div>
          
          <Modal
            title="提示"
            visible={this.props.loginModal}
            onOk={this.handleOk}
            footer={[
                <Button key="submit" type="primary" style={{marginRight:36}}  onClick={this.handleOk}>
                确定
                </Button>,
                <Button key="login" type="primary"  onClick={this.loginHandlefn.bind(this)}>
                去首页
                </Button>
               
            ]}
          >
            <p>登录成功！ 相遇即是缘分。</p>
           
          </Modal>
        </div>
      );
    }
  }

  RedirectModal = withRouter(RedirectModal)


@inject('userStore')
@typeDec
@observer
class LoginCom extends Component{

    constructor(props){
        super(props)
        this.state = {
            loginModal:false
        }
        console.log(this.props.activestate, 'userStore')

    }
    componentWillMount(){
        // 如果已登录不让访问登录页面
        const username = this.getCookie('username')
        let redireactpathname = this.props.activestate
        // console.log(pathname, 'location')
        if(this.props.activestate=='index'){
            redireactpathname= ''
        }
        if(username!==null){
            this.props.history.push('/' + redireactpathname)
        }
    }
    setloginModal(){
        this.setState({
            loginModal : false
        })
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

    @action.bound
    setLoginState(){
        console.log('0000000')
        this.props.userStore.userobj.loginState = true;
        const username = this.getCookie('username')
        this.props.userStore.userobj.user = username ;
        this.props.userStore.userobj.redireactUrl = '';
        


    }

    loginHandle(csrftoken){
        const username = this.userName.props.value
        const password = this.password.props.value
        let that = this
        axios({
            method: 'post',
            url: '/api/login',
            data: {
                username:username,
                password:password,
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
            }).then((response)=> {
                console.log(response);
                // const resdata = response.data;
                if(response.status==200){
                    // console.log(that.props.userStore)
                    that.setLoginState()

                    this.setState({
                        loginModal : true
                    })
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

            axios.get('/api/login')
            .then((res)=>{
                        // this.usrInfoSending(new Date().getTime())
                        console.log('6666',res.data.pathname)
                        if(res.data['code']==200){
                            this.props.userStore.userobj.redireactUrl = res.data.pathname;
                            this.props.history.push(res.data.pathname)
                            // console.log('zjpzjp')
                        }else{
                            let csrftoken = this.getCookie('csrftoken');
                            // console.log(csrftoken)
                            this.loginHandle(csrftoken)
                        }
                        
                    
                        
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

    resetHandle = (value) => {
        console.log(value , 'vvvvvv');
        this.props.form.setFieldsValue({
            password: '',
        });
       
      }
    render(){
        let pathname = this.props.userStore.userobj.redireactUrl
        if(pathname){
            this.props.history.push(pathname)
        }
        const { getFieldDecorator } = this.props.form;
        // const { loginState }= this.props.userStore.userobj;
        const { loginModal } = this.state
        return(
            <Layout id="login-layout">
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
                    <FormItem>
                        <Button type="primary" id="login" htmlType="submit" className="ant-btn login-form-button ant-btn-primary" >
                        登录
                        </Button>
                        
                    </FormItem>
                        
                </Form>
                <RedirectModal  loginModal={loginModal} setloginModal={this.setloginModal.bind(this)} resetHandle={this.resetHandle}/>
                
            </Layout>
        )
    }
}

const Login = Form.create()(LoginCom);
export default Login






// const Login = Form.create()(LoginCom);
// export default Login

// ReactDOM.render(<Login />, document.getElementById('app'));

// if (module.hot) {
//     // I I accept 函数的第 1 个参数指出当前文件接收哪些子模块的替换，这里表示只接收 . IAppCorr or 川这个子模块
//      //第 2 个参数用于在新的子模块加载完毕后需要执行的逻辑
//      module.hot.accept ([ './login.jsx' ],()=>{

//         ReactDOM.render(<Login />, document.getElementById('app'));
        
//         //在新的 AppComponent 加载成功后重新执行组建渲染逻辑 render(<AppComponentl> , window.document.getElementByid (’ app ’ ));
//      });
//  }