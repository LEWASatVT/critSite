/**
 * @jsx React.DOM
 */

/**
 *
 * It uses `<NoteApp/>` to render the app on the server. You can create isomorphic apps by rendering React on both Server
 * and Client.
 */

var React = require('react');
var NoteApp=require('./components/NoteApp.jsx');

var App = React.createClass({
    render: function() {
        return (
            <NoteApp />
        );
    }
});


module.exports=App;