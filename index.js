var wundergroundApi = require('./lib/wunderground-node');

var wunderground = function(key, city, state) {
	this.key = key || null;
	this.city = city || null;
	this.state = state || null;
	this.path = function(apiType, opts, date){
		var key = opts.key || this.key;
		var city = opts.city || this.city;
		var state = opts.state || this.state;
		if(date){
			if(apiType === 'history_' || apiType === 'planner_'){
				return '/api/' + key + '/' + apiType + date + '/q/' + state + '/' + city + '.json';
			}
			else{
				console.log("Error: Date field not null without API type of planner or history");
				return '/api/' + key + '/' + apiType + '/q/' + state + '/' + city + '.json';
			}
		}
		else{
			if(apiType === 'currenthurricane'){
				return '/api/' + key + '/' + apiType + '/view.json';
			}
			else{
				return '/api/' + key + '/' + apiType + '/q/' + state + '/' + city + '.json'; 
			}
		}
	};
	this.conditions = wundergroundApi.API;
	this.forecast = wundergroundApi.API;
	this.forecast10day = wundergroundApi.API;
	this.hourly = wundergroundApi.API;
	this.hourly10day = wundergroundApi.API;
	this.alerts = wundergroundApi.API;
	this.almanac = wundergroundApi.API;
	this.astronomy = wundergroundApi.API;
	this.currentHurricane = wundergroundApi.API;
	this.geolookup = wundergroundApi.API;
	this.history = wundergroundApi.APIDate;
	this.planner = wundergroundApi.APIDate;
	this.rawtide = wundergroundApi.API;
	this.satellite = wundergroundApi.API;
	this.tide = wundergroundApi.API;
	this.webcams = wundergroundApi.API;
	this.yesterday = wundergroundApi.API;
};

module.exports = wunderground;