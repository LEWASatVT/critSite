/**
 * @jsx React.DOM
 */

var React = require('react');
var TextArea=require('./TextArea.jsx');
var NoteActions = require('../../actions/NoteActions.js');
var NoteStore = require('../../stores/NoteStore.js');

var NoteCreationBox = React.createClass({

    handleSave:function(noteText,id,fileName){
        if(id){
            NoteActions.editNote({_id:id,text:noteText,file:fileName});
        }

        else{
            NoteActions.createNote({_id:Date.now(),text:noteText,file:fileName});
        }
    },

    render: function() {

        var note;

        if(this.props.id) {
            note=NoteStore.getNote(this.props.id);
        }

        return (
            <div className="col-md-8">
                <TextArea onSave={this.handleSave} id={this.props.id} noteText={note ? note.text : ''} />
            </div>
        )
    }
});

module.exports=NoteCreationBox;