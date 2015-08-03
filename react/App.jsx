/**
 * @jsx React.DOM
 */

/**
 *
 * It uses `<NoteApp/>` to render the app on the server. You can create isomorphic apps by rendering React on both Server
 * and Client.
 */

var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

var NoteApp=require('./components/NoteApp.jsx');

var App = React.createClass({
    render: function() {
        return (
            <div className="container">
                <div className="row header">
                    <div className="page-header">
                        <h1>Critical Site Explorer</h1>
                    </div>
                </div>
	        <RouteHandler />
            </div>
        );
    }
});


module.exports=App;