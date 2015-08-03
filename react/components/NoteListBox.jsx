/**
 * @jsx React.DOM
 */

var React = require('react');
var NoteList = require('./NoteList.jsx');
var AltContainer = require('alt/AltContainer');
var NoteStore=require('../../stores/NoteStore');

var NoteListBox = React.createClass({

    getInitialState:function(){
      return NoteStore.getState();
    },

    onChange: function(notes) {
        this.setState(notes);
    },
 
    componentDidMount: function() {
        NoteStore.listen(this.onChange);
    },

    componentWillUnmount: function() {
        NoteStore.unlisten(this.onChange);
    },

    onAdd:function(event){
        event.preventDefault();
        this.props.onAdd();
        this.refs.noteList.setActiveNote(null);
    },

    render: function() {
        return (
	    <AltContainer store={NoteStore}>
            <div className="col-sm-8">
                <div className="centered"><a href="" onClick={this.onAdd}>Add New</a></div>
                <NoteList ref="noteList" notes={this.state.notes} onEdit={this.props.onEdit} />
            </div>
	    </AltContainer>
        );
    }
});

module.exports=NoteListBox;