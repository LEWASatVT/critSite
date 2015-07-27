/**
 * @jsx React.DOM
 */

var React = require('react');

var Login = React.createClass({
    getInitialState: function() {
        return({email:none,password:none});        
    },                    
    handleLogin: function() {
        //var email = React.findDOMNode(this.refs.email);
        //var password = React.findDOMNode(this.refs.password);

        Auth.login(this.state.email, this.state.password)
    },
    render: function() {
        return (
            <form role="form" id="login-form">
            <div className="formGroup">
            <input type="email" ref="email"/>
            <input type="password" ref="password"/>
            </div>
            <input type="button" onClick={this.login.bind(this)}/>
            </form>
        );
    }
});