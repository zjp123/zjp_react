import React from 'react'
import {
    HashRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

  import { createHashHistory } from "history";

const history = createHashHistory();
history.listen(location => {
  console.log(999)
  console.log(location.pathname); // /home
  const pathname = location.pathname
  // if(pathname=='/index.html'){

  //   history.push('/index.html');
  // }
});
  
  console.log(window.history)
  const BasicExample = () => (
    <Router>
      <div>
        <ul>
          <li><Link to="/home">首页</Link></li>
          <li><Link to="/home/about">关于</Link></li>
          <li><Link to="/home/topics">主题列表</Link></li>
          <li><Link to="/index.html">首页</Link></li>
        </ul>
  
        <hr/>
  
        <Route exact path="/home" component={Home}/>
        <Route path="/home/about" component={About}/>
        <Route path="/home/topics" component={Topics}/>
      </div>
    </Router>
  )
  
  const Home = () => (
    <div>
      <h2>首页</h2>
    </div>
  )
  
  const About = () => (
    <div>
      <h2>关于</h2>
    </div>
  )
  
  const Topics = ({ match }) => (
    <div>
      <h2>主题列表</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>
            使用 React 渲染
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>
            组件
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            属性 v. 状态
          </Link>
        </li>
      </ul>
  
      <Route path={`${match.url}/:topicId`} component={Topic}/>
      <Route exact path={match.url} render={() => (
        <h3>请选择一个主题。</h3>
      )}/>
    </div>
  )
  
  const Topic = ({ match }) => (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  )

  export default BasicExample