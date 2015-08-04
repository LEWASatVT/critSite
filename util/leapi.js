var request = require('superagent');
var config = require('../config.js');

var leapi = {
    auth: function(email, password, fn) {
        request.get(config.baseUrl+'/token')
	    .withCredentials()
	    .auth('dmaczka@vt.edu','python')
            .end(function(err, response) {
		if (response) {
                    fn({token:response.token});
		} else {
                    fn({token:null});
		}
            });
    },
    syncNote: function(note,fn) {
	request.post(config.baseUrl+'/media',note,function(object,status) {
	    console.log('status: '+status);
	    var formData = new FormData();
	    formData.append('file',note.file);
	    var imageContent = apiHost+object.href;
	    request.post(imageContent,formData,function(object,status){
		fn(object,status);
	    });
	});
    }
};


module.exports = leapi;

