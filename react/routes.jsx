var React = require('react/addons');
var Route = require('react-router').Route;

var App = require('./App.jsx');
var NoteApp = require('./components/NoteApp.jsx');
var Login = require('./components/Login.jsx');

var routes = (
    <Route name='home' path="/" handler={App}>
        <Route name='notelist' path="/" handler={NoteApp} />
        <Route name='login' path="/login" handler={Login} />
    </Route>
);

module.exports = routes;