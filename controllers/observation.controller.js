var request = require('superagent'),
    config = require('../config');

exports.showNearbyObservations = function(req,res,next) {
    request.get(config.baseUrl+'/media',function(err,response) {
	res.locals.data = {
	    "NoteStore": {
		"notes" : response.body
	    }
	};
	next();
    });
};


