/**
 * Created by Sandeep on 06/10/14.
 */

var alt = require('../react/alt');
var NoteActions=require('../actions/NoteActions');
var ImageUtil = require('../util/util.js');

class NoteStore {
    constructor(){
	var self = this;
	this.bindListeners({
	    onCreate: NoteActions.CREATE_NOTE,
	    onEdit: NoteActions.EDIT_NOTE,
	    onDelete: NoteActions.DELETE_NOTE,
	    fetchObservations: NoteActions.FETCH_OBSERVATIONS,
	    updateObservations: NoteActions.UPDATE_OBSERVATIONS
	});
	this.on('init', function() {
	    self.notes = [];
	});
   }

    onCreate(note) {
        note.sync = false;
        this.notes.push(note);
    }

    onEdit(note) {
        for(var i=0;i<_notes.length;i++){
            if(self.notes[i].id===note.id){
                this.notes[i].text=note.text;
                break;
            }
        }
    }

    onDelete(note) {
        for(var i=0;i<_notes.length;i++){
            if(this.notes[i].id===note.id){
                this.notes.splice(i,1);
                break;
            }
        }
    }

    fetchObservations() {
	this.notes = [];
    }

    updateObservations(observations) {
	this.notes = observations;
    }
    
    getNotes(){
        return this.notes;
    }

    getNote(id) {
        for(var i=0;i<_notes.length;i++){
            if(this.notes[i]._id===id){
                return this.notes[i];
            }
        }
    }
}

module.exports= alt.createStore(NoteStore, 'NoteStore');
