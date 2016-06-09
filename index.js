var wundergroundApi = require('./lib/wunderground-node');

var wunderground = function(key, city, state) {
	this.key = key || null;
	this.city = city || null;
	this.state = state || null;
	this.path = function(apiType, date){
		if(date){
			if(apiType == 'history_' || apiType == 'planner_'){
				return '/api/' + key + '/' + apiType + date + '/q/' + state + '/' + city + '.json';
			}
			else{
				console.log("Error: Date field not null without API type of planner or history");
				return '/api/' + key + '/' + apiType + '/q/' + state + '/' + city + '.json';
			}
		}
		else{
			if(apiType == 'currenthurricane'){
				return '/api/' + key + '/' + apiType + '/view.json';
			}
			else{
				return '/api/' + key + '/' + apiType + '/q/' + state + '/' + city + '.json'; 
			}
		}
	};
	this.conditions = wundergroundApi.conditions;
	this.forecast = wundergroundApi.forecast;
	this.forecast10day = wundergroundApi.forecast10day;
	this.hourly = wundergroundApi.hourly;
	this.hourly10day = wundergroundApi.hourly10day;
	this.alerts = wundergroundApi.alerts;
	this.almanac = wundergroundApi.almanac;
	this.astronomy = wundergroundApi.astronomy;
	this.currentHurricane = wundergroundApi.currentHurricane;
	this.geolookup = wundergroundApi.geolookup;
	this.history = wundergroundApi.history;
	this.planner = wundergroundApi.planner;
	this.rawtide = wundergroundApi.rawtide;
	this.satellite = wundergroundApi.satellite;
	this.tide = wundergroundApi.tide;
	this.webcams = wundergroundApi.webcams;
	this.yesterday = wundergroundApi.yesterday;
};

module.exports = wunderground;