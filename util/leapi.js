var $ = require('jquery');
var apiHost = 'http://128.173.40.161:8000';
var leapi = {
	syncNote: function(note,fn) {
		$.post(apiHost+'/media',note,function(object,status) {
			console.log('status: '+status)
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