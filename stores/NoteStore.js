/**
 * Created by Sandeep on 06/10/14.
 */
var Reflux=require('reflux');
var NoteActions=require('../actions/NoteActions');

var _notes=[];

var NoteStore = Reflux.createStore({

    init: function() {
        this.listenTo(NoteActions.createNote, this.onCreate);
        this.listenTo(NoteActions.editNote, this.onEdit);
        this.listenTo(NoteActions.deleteNote, this.onDelete);
        _notes.push({_id:0,text:"initialNote"});
    },

    getInitialState: function() {
        return _notes;
    },

    onCreate: function(note) {
        _notes.push(note);
        this.trigger(_notes);
    },

    onEdit: function(note) {
        for(var i=0;i<_notes.length;i++){
            if(_notes[i]._id===note._id){
                _notes[i].text=note.text;
                this.trigger(_notes);
                break;
            }
        }
    },

    onDelete: function(note) {
        for(var i=0;i<_notes.length;i++){
            if(_notes[i]._id===note._id){
                _notes.splice(i,1);
                this.trigger(_notes);
                break;
            }
        }
    },

    getNotes:function(){
        return _notes;
    },

    getNote:function(id){
        for(var i=0;i<_notes.length;i++){
            if(_notes[i]._id===id){
                return _notes[i];
            }
        }
    }

});

module.exports=NoteStore;