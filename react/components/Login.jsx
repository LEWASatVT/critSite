/**
 * @jsx React.DOM
 */
var React = require('react');

var Login = React.createClass({

	handleLogin:function() {

	},

	render: function() {
		return (
			<div className="loginBox">
				<input type="email" ref="email" />
				<input type="password" ref="password" />
				<input type="button" className="btn btn-success btn-lg" value="Login" onClick={this.props.handleLogin.bind(null,this.refs.email,this.refs.password)} />
			</div>
		)
	}
});
module.exports=Login;