var wundergroundApi = require('./lib/wunderground-node');

var wunderground = function(key, city, state) {
	this.key = key || null;
	this.city = city || null;
	this.state = state || null;
	this.path = function(type){
		return '/api/' + key + '/' + type + '/q/' + state + '/' + city + '.json';
	};
	this.conditions = wundergroundApi.conditions;
	this.forecast = wundergroundApi.forecast;
	this.forecast10day = wundergroundApi.forecast10day;
	this.hourly = wundergroundApi.hourly;
	this.hourly10day = wundergroundApi.hourly10day;
	this.alerts = wundergroundApi.alerts;
};

module.exports = wunderground;