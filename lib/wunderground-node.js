var httpHelper = require('./http-helper');

//Uses the httpHelper to make a request to the API based on the type of request
exports.API = function(type, done){
	httpHelper.getApi(this.path(type), function(response){
		if(!response.error){
			return done(null, response.data);
		}
		else{
			return done(response.error, null);
		}
	});
};

//Uses the httpHelper to make a request to the API based on one of the two types of requests including dates
exports.APIDate = function(type, date, done){
	httpHelper.getApi(this.path(type + '_' + date), function(response){
		if(!response.error){
			return done(null, response.data);
		}
		else{
			return done(response.error, null);
		}
	});
};






