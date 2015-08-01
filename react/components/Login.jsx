/**
 * @jsx React.DOM
 */

var React = require('react');

var Login = React.createClass({
    getInitialState: function() {
        return({email:null,password:null});        
    },                    
    handleLogin: function() {
        //var email = React.findDOMNode(this.refs.email);
        //var password = React.findDOMNode(this.refs.password);

        Auth.login(this.state.email, this.state.password);
    },
    render: function() {
        return (
            <form role="form" id="login-form">
            <div className="formGroup">
            <label>Email: </label><input type="email" ref="email"/>
            <label>Password: </label><input type="password" ref="password"/>
            </div>
            <input type="button" value="login" onClick={this.handleLogin.bind(this)}/>
            </form>
        );
    }
});

module.exports=Login;
