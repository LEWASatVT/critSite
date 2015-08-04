/**
 * Created by Sandeep on 06/10/14.
 */

var ImageUtil = require('../util/util.js').imageUtil;
var request = require('superagent'),
    config = require('../config'),
    alt = require('../react/alt');

class NoteActions {
    createNote(note) {
	if (note.file) {
            ImageUtil.extractExifData(note.file, function(tags){
		note.datetime = tags.ModifyDate;
                note.location = { geo:
				  {
				      coordinates: [ tags.GPSLatitude, tags.GPSLongitude ]
				  }
				};
                this.dispatch(note);
            }.bind(this));
	} else {
            this.dispatch(note);
	}
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
