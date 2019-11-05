import React, { Component } from 'react';
import logo from 'assets/logo.jpg';
import 'styles/app.css';

export default class App extends Component {
	render () {
		return (
			<div>
				<img className="logo" src={ logo } />
				<div className="title">Hello React!</div>
			</div>
		)
	}
}