var httpHelper = require('./http-helper');

exports.conditions = function(done){
	httpHelper.getApi(this.path('conditions'), function(response){
		if(!response.error){
			return done(null, response.data);
		}
		else{
			return done(response.error, null);
		}
	});
};

exports.forecast = function(done){
	httpHelper.getApi(this.path('forecast'), function(response){
		if(!response.error){
			return done(null, response.data);
		}
		else{
			return done(response.error, null);
		}
	});
};

exports.forecast10day = function(done){
	httpHelper.getApi(this.path('forecast10day'), function(response){
		if(!response.error){
			return done(null, response.data);
		}
		else{
			return done(response.error, null);
		}
	});
};

exports.hourly = function(done){
	httpHelper.getApi(this.path('hourly'), function(response){
		if(!response.error){
			return done(null, response.data);
		}
		else{
			return done(response.error, null);
		}
	});
};

exports.hourly10day = function(done){
	httpHelper.getApi(this.path('hourly10day'), function(response){
		if(!response.error){
			return done(null, response.data);
		}
		else{
			return done(response.error, null);
		}
	});
};

exports.alerts = function(done){
	httpHelper.getApi(this.path('alerts'), function(response){
		if(!response.error){
			return done(null, response.data);
		}
		else{
			return done(response.error, null);
		}
	});
};
