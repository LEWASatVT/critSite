/**
 * @jsx React.DOM
 */

/**
 *
 * It uses `<NoteApp/>` to render the app on the server. You can create isomorphic apps by rendering React on both Server
 * and Client.
 */

var React = require('react');
var Login = require('./components/Login.jsx')
var App = React.createClass({
    render: function() {
        return (
            <Login />
        );
    }
});


module.exports=App;