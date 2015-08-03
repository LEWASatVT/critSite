/**
 * Created by Sandeep on 06/10/14.
 */

var request = require('superagent'),
    config = require('../config'),
    alt = require('../react/alt');

class NoteActions {
    createNote(note) {
	this.dispatch(note);
    }

    editNote(note) {
	this.dispatch(note);
    }

    deleteNote(note) {
	this.dispatch(note);
    }

    fetchObservations(cb) {
        request
	    .get(config.baseUrl+"/media")
	    .set('Accept', 'application/json')
	    .end(function(err, response){
		var object = response.body;
		this.actions.updateObservations(object);
            }.bind(this));  
    }

    updateObservations(observations) {
	this.dispatch(observations);
    }
}

module.exports=alt.createActions(NoteActions);
