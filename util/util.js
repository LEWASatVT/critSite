var imageUtil = {
    extractExifData: function(file,fn) {
	var reader = new FileReader();
	reader.onload = function(e) {
	    var slice = reader.result.slice(0, 65535);
	    var parser = require('exif-parser').create(slice);
	    var photodata = parser.parse();
	    fn(photodata.tags);
	};
    	reader.readAsArrayBuffer(file);
    }
};
module.exports = imageUtil; 
