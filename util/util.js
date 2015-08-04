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

var hash = {
    hashCode: function(string){
	var hash = 0;
	if (string.length == 0) return hash;
	for (var i = 0; i < string.length; i++) {
 		var char = string.charCodeAt(i);
 		hash = ((hash<<5)-hash)+char;
 		hash = hash & hash; // Convert to 32bit integer
 	}
 	return hash;
    }
};

exports.imageUtil = imageUtil; 
exports.hashCode = hash.hashCode;
