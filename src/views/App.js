import React, { Component } from 'react';
import { changeVal } from 'store/actionCreator';
import store from 'store';
import 'styles/app.css';

export default class App extends Component {
	constructor () {
		super();
		this.state = {
			iptVal: ''
		}
	}
	render () {
		return (
			<div>
				<img className="logo" src={ require('assets/logo.jpg') } />
				<hr/>
				<h1>{ store.getState()['iptVal'] }</h1>
				<hr/>
				<div className="title">输入内容：{ this.state.iptVal }</div>
				<input type="text" value={ this.state.iptVal } onChange={function (e) { this.inputChange(e) }.bind(this)}/>
			</div>
		)
	}
	inputChange (e) {
		this.setState({
			iptVal: e.target.value
		})
		store.dispatch(changeVal(e.target.value));
	}
}