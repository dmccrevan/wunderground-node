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

exports.almanac = function(done){
	httpHelper.getApi(this.path('almanac'), function(response){
		if(!response.error){
			return done(null, response.data);
		}
		else{
			return done(response.error, null);
		}
	});
};

exports.astronomy = function(done){
	httpHelper.getApi(this.path('astronomy'), function(response){
		if(!response.error){
			return done(null, response.data);
		}
		else{
			return done(response.error, null);
		}
	});
};

exports.currentHurricane = function(done){
	httpHelper.getApi(this.path('currenthurricane'), function(response){
		if(!response.error){
			return done(null, response.data);
		}
		else{
			return done(response.error, null);
		}
	});
};

exports.geolookup = function(done){
	httpHelper.getApi(this.path('geolookup'), function(response){
		if(!response.error){
			return done(null, response.data);
		}
		else{
			return done(response.error, null);
		}
	});
};

exports.rawtide = function(done){
	httpHelper.getApi(this.path('rawtide'), function(response){
		if(!response.error){
			return done(null, response.data);
		}
		else{
			return done(response.error, null);
		}
	});
};

exports.satellite = function(done){
	httpHelper.getApi(this.path('satellite'), function(response){
		if(!response.error){
			return done(null, response.data);
		}
		else{
			return done(response.error, null);
		}
	});
};

exports.tide = function(done){
	httpHelper.getApi(this.path('tide'), function(response){
		if(!response.error){
			return done(null, response.data);
		}
		else{
			return done(response.error, null);
		}
	});
};

exports.webcams = function(done){
	httpHelper.getApi(this.path('webcams'), function(response){
		if(!response.error){
			return done(null, response.data);
		}
		else{
			return done(response.error, null);
		}
	});
};

exports.yesterday = function(done){
	httpHelper.getApi(this.path('yesterday'), function(response){
		if(!response.error){
			return done(null, response.data);
		}
		else{
			return done(response.error, null);
		}
	});
};

exports.history = function(date, done){
	httpHelper.getApi(this.path('history_' + date), function(response){
		if(!response.error){
			return done(null, response.data);
		}
		else{
			return done(response.error, null);
		}
	});
};

exports.planner = function(date, done){
	httpHelper.getApi(this.path('planner_' + date), function(response){
		if(!response.error){
			return done(null, response.data);
		}
		else{
			return done(response.error, null);
		}
	});
};






