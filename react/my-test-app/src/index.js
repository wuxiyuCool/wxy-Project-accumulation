import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { LocaleProvider } from 'antd';
import "antd/dist/antd.css";
import zhCN from 'antd/lib/locale-provider/zh_CN';
import store from './store/store'
import { Provider } from 'react-redux';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'pile-ui/dist/styles/pile.min.css'

moment.locale('zh-cn');
class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: [1, 3, 45, 7, 57, 8],
      name: 'wxy'
    }
  }
  handleChangeValue = (val) => {
    // console.info('index-value',val)
    this.setState({
      name: val
    })
    // console.info('index-value',this.state.name)
  }
  componentDidMount() {
    console.log(store.getState())
  }
  render() {
    return (
      <Provider store={store}>
        <LocaleProvider locale={zhCN}>
          <App  name={this.state.name} number={this.state.number} onChangeTestValue={this.handleChangeValue} />
        </LocaleProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
