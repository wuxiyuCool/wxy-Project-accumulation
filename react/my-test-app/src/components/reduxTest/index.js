/**
 * @ 展示组件
 * 
 */
import React, { Component } from 'react';
import {  connect } from 'react-redux';
class ReduxTest extends Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		// console.log(this.props)
	}
	render() {
		const {PayIncrease, PayDecrease, aoa, bob } = this.props
		return (
			<div>
				<p >aaa: {aoa} bbb: {bob}</p>
				<button onClick={PayIncrease}>+aaa</button>
				<button onClick={PayDecrease}>+bbb</button>
			</div>
		);
	}
}

  // react-redux
  function mapStateToProps(state) {
	console.log(state)
	return {
		bob: state.reducer2.bbb,
		aoa: state.reducer2.aaa
	}
  }
function mapDispatchToProps(dispatch) {
	return {
		PayIncrease: () => dispatch({ type: 'aaa' }),
		PayDecrease: () => dispatch({ type: 'bbb' })
	}
  }
// export default ReduxTest;
export default connect(mapStateToProps,mapDispatchToProps)(ReduxTest);
