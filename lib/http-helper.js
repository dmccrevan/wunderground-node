var http = require('http');

//Makes a http request to the API
exports.getApi = function(path, callback){
	return http.get({
        host: 'api.wunderground.com',
		path: path
    }, function(response) {
        var chunkText = '';
        response.on('data', function(chunk) {
        	chunkText += chunk.toString('utf8');
        });
        response.on('error', function(error){
        	callback({
        		error: error
        	});
        });
        response.on('end', function() {
            var chunkJSON = JSON.parse(chunkText);
            callback({
                data: chunkJSON
            });
        });
    });
};
