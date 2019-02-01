import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Test from './view/test'
// import UserA from './view/userA'
// import UserB from './view/userB'
import Home from './view/home'
import Shop from './view/shop'
import Info from './view/info'
import My from './view/my/my'
import Invitate from './view/invitate/invitate'
import Page from './components/page/page'
import { Icon } from 'antd';
import { HashRouter as Router, NavLink, Route } from 'react-router-dom';
import { connect } from 'react-redux';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      age: 123,
      sex: 0,
      value: '',
      name: props.name,
      current: 'mail',
      Router: '主页'
    }
    // this.name = props.name
    this.number = props.number

  }
  handleClick1 = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  handleClick(sex) {
    this.setState(prevState => ({
      age: prevState.age += 1,
      sex: sex ? 0 : 1
    }));
    this.props.onChangeTestValue(this.state.value)
  }
  changeValue = async (event) => {
    await this.setState({
      value: event.target.value
    })
  }
  Number(props) {
    return props.map((e) => {
      return <li>{e}</li>
    }
    )
  }
  itemclick(e, i) {
    console.info(e, i)
  }
  componentDidMount() {
    this.setState({
      age: 12
    });
    console.log(this.props.tiger)
  }
  clickRouter = (name) => {
    this.setState({
      Router: name
    })
  }
  componentWillUnmount() {
    console.log('willun')
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      name: nextProps.name,
    })
  }
  render() {
    // let user = (state) => {
    //   if (state) {
    //     return <UserA />;
    //   } else {
    //     return <UserB />;
    //   }
    // }
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       {user(this.state.sex)}
    //       <Router basename="/">
    //         <Link to="/today">111</Link>
    //       </Router>
    //       <Router basename="/">
    //         <Link to="/">222</Link>
    //       </Router>
    //       <Router>
    //         <div>
    //           <Route exact path="/" component={UserA} />
    //           <Route path="/today" component={UserB} />
    //         </div>
    //       </Router>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React {this.state.name} {this.state.age} {this.state.sex === 0 ? '男' : '女'}
    //       </a>
    //       <button onClick={() => { this.handleClick(this.state.sex) }}>更换用户</button>
    //       <Test></Test>
    //       <input type="text" value={this.state.value} onChange={this.changeValue} />
    //       <p className="value">我是value: {this.state.value}</p>
    //     </header>
    //     <Page title='1234' left={<Test></Test>}>
    //       <ul>
    //         {
    //           this.number.map((e, index) =>
    //             <li key={index} onClick={() => { this.itemclick(e, index) }}>{e}</li>
    //           )
    //         }
    //         <li>12</li>
    //       </ul>
    //     </Page>
    //     <Tabs activeIndex={1} isInLocal='ture' onChange={(n) => { console.log(n) }}>
    //       <TabPane tab="Tab1"><div className="tabs-test-style">Tab1 内容</div></TabPane>
    //       <TabPane tab="Tab2"><div className="tabs-test-style">Tab2 内容</div></TabPane>
    //       <TabPane tab="Tab3"><div className="tabs-test-style">Tab3 内容</div></TabPane>
    //     </Tabs>
    //   </div>
    // );
    // let user = (state) => {
    //   if (state) {
    //     return <UserA />;
    //   } else {
    //     return <UserB />;
    //   }
    // }
    const getConfirmation = (message, callback) => {
      const allowTransition = window.confirm(message);
      console.log(1)
      callback(allowTransition);
    }
    const link = [
      {
        url: '/',
        name: '主页'
      },
      {
        url: '/invitate',
        name: '邀你创业'
      },
      {
        url: '/info',
        name: '对话'
      },
      {
        url: '/shop',
        name: '购物'
      },
      {
        url: 'my',
        name: '我的'
      },
    ]
    return (
      <div className="main">
        <Page >
          <Router getUserConfirmation={getConfirmation}>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/shop" component={Shop} />
              <Route path="/info" component={Info} />
              <Route path="/invitate" component={Invitate}  />
              <Route path="/my" component={My} />
            </div>
          </Router>
        </Page>
        <div className="tabBar">
          {
            link.map((item) => {
              return (
                <Router key={item.url} basename="/">
                  <NavLink exact onClick={ () => {
                    this.clickRouter(item.name)
                  } } to={item.url} className="tabs" activeStyle={{color: '#40a9ff'}}>
                    <Icon type="home" />
                  {item.name}</NavLink>
                </Router>
              )
            })
          }
        </div>
      </div>
    );
  }

}

export default App;
