/**
 * @ 容器组件
 */
import React, { Component } from 'react';
    // 原生redux
import { increase, decrease } from '../../store/action'
    // 原生redux
import store from '../../store/store'
  // react-redux
import ReduxTest from '../../components/reduxTest/index'
import {  connect } from 'react-redux';
// console.log(store.getState())
class Invitate extends Component {
  constructor(props) {
    super(props)
    // 原生redux
    this.state = {
      gongzi: store.getState()
    }
  }
  componentDidMount() {
    // let that = this
    // 原生redux
    // store.subscribe(() => {
    //   console.log(store.getState())
      // that.setState({
      //   gongzi: store.getState()
      // })
    // });
  }
    // 原生redux

  add = () => {
    store.dispatch(increase)
  }
    // 原生redux

  del = () => {
    store.dispatch(decrease)
  }
  // render() {
  //   return (
    // 原生redux
  //     <div >
  //       <p className="App">i am Invitate</p>
  //       <button onClick={this.add}>+</button>
  //       <button onClick={this.del}>-</button>
  //       <span>{this.state.gongzi}</span>
  //     </div>
  //   );
  // }
  // react-redux
  render() {
    return (
      <div >
        <p className="App">i am Invitate</p>
        <button onClick={this.props.PayIncrease}>+</button>
        <button onClick={this.props.PayDecrease}>-</button>
        <span>{this.props.tiger}</span>
        <ReduxTest />
      </div>
    );
  }
}
  // react-redux
function mapStateToProps(state) {
  console.log(state)
  return {
      tiger: state.reducer1,
  }
}
  // react-redux
//需要触发什么行为
function mapDispatchToProps(dispatch) {
  return {
      PayIncrease: () => dispatch({ type: '涨工资' }),
      PayDecrease: () => dispatch({ type: '扣工资' })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Invitate);
// export default connect(mapState, mapDispatch)(Invitate)
// ((text,fn, name) => {
//   console.log(`${name}真是个${text}!`)
//       fn()
// })('sb', ()=>　console.log('对,你说的真好！'), '熊')
