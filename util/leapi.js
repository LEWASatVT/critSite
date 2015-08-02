var $ = require('jquery');
var config = require('../config.js');

var leapi = {
    auth: function(email, password, fn) {
        $.ajax(
            {type: 'POST',
             url: config.baseUrl+'/token',
             beforeSend: function(xhr) {
                 xhr.setRequestHeader('Authorization', 'Basic ' + bota(email + ':' + password));
             },
             success: function(response, status) {
                 fn({token:response.token});
             },
             error: function(jqXHR) {
                 fn({token:null});
             }
            });
    },
    syncNote: function(note,fn) {
	$.post(apiHost+'/media',note,function(object,status) {
	    console.log('status: '+status);
	    var formData = new FormData();
	    formData.append('file',note.file);
	    var imageContent = apiHost+object.href;
	    $.post(imageContent,formData,function(object,status){
		fn(object,status);
	    });
	});
    }
};

module.exports = leapi;

