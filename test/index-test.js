var wunderground = require('../index.js');
var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var client = new wunderground('b143d96d8360be46', 'Boston', 'MA');

chai.use(chaiHttp);

var opts_full = {
	key: process.env.KEY,
	city: 'San_Francisco',
	state: 'CA'
};

var opts_half = {
	city: 'San_Francisco',
	state: 'CA'
};

describe('wunderground api', function(){
	it('conditions', function(done){
		client.conditions('conditions', '', function(err, res){
			if(err) return done(err);
			res.should.be.an.object;
			res.current_observation.display_location.full.should.eql('Boston, MA');
			res.current_observation.should.have.property('weather');
			return done();
		});
	});
	it('conditions + opts', function(done){
		client.conditions('conditions', opts_full, function(err, res){
			if(err) return done(err);
			res.should.be.an.object;
			res.current_observation.display_location.full.should.eql('San Francisco, CA');
			res.current_observation.should.have.property('weather');
			return done();
		});
	});
	it('forecast', function(done){
		client.forecast('forecast', '', function(err, res){
			if(err) return done(err);
			res = res.forecast.txt_forecast.forecastday;
			res.should.be.an.array;
			return done();
		});
	});
	it('forecast + opts', function(done){
		client.forecast('forecast', opts_half, function(err, res){
			if(err) return done(err);
			res = res.forecast.txt_forecast.forecastday;
			res.should.be.an.array;
			return done();
		});
	});
	it('forecast10day', function(done){
		client.forecast10day('forecast10day', '', function(err, res){
			if(err) return done(err);
			res = res.forecast.txt_forecast.forecastday;
			res.should.be.an.array;
			return done();
		});
	});
	it('forecast10day + opts', function(done){
		client.forecast10day('forecast10day', opts_full, function(err, res){
			if(err) return done(err);
			res = res.forecast.txt_forecast.forecastday;
			res.should.be.an.array;
			return done();
		});
	});
	it('hourly', function(done){
		client.hourly('hourly', '', function(err, res){
			if(err) return done(err);
			res = res.hourly_forecast;
			res.should.be.an.array;
			return done();
		});
	});
	it('hourly + opts', function(done){
		client.hourly('hourly', opts_half, function(err, res){
			if(err) return done(err);
			res = res.hourly_forecast;
			res.should.be.an.array;
			return done();
		});
	});
	it('hourly10day', function(done){
		client.hourly10day('hourly10day', '', function(err, res){
			if(err) return done(err);
			res = res.hourly_forecast;
			res.should.be.an.array;
			return done();
		});
	});
	it('hourly10day + opts', function(done){
		client.hourly10day('hourly10day', opts_full, function(err, res){
			if(err) return done(err);
			res = res.hourly_forecast;
			res.should.be.an.array;
			return done();
		});
	});
	it('alerts', function(done){
		client.alerts('alerts', '', function(err, res){
			if(err) return done(err);
			res = res.alerts;
			res.should.be.an.array;
			return done();
		});
	});
	it('alerts + opts', function(done){
		client.alerts('alerts', opts_half, function(err, res){
			if(err) return done(err);
			res = res.alerts;
			res.should.be.an.array;
			return done();
		});
	});
	it('almanac', function(done){
		client.almanac('almanac', '', function(err, res){
			if(err) return done(err);
			res = res.almanac;
			res.should.have.property('temp_high');
			return done();
		});
	});
	it('almanac + opts', function(done){
		client.almanac('almanac', opts_full, function(err, res){
			if(err) return done(err);
			res = res.almanac;
			res.should.have.property('temp_high');
			return done();
		});
	});
	it('astronomy', function(done){
		client.astronomy('astronomy', '', function(err, res){
			if(err) return done(err);
			res = res.moon_phase;
			res.should.have.property('ageOfMoon');
			return done();
		});
	});
	it('astronomy + opts', function(done){
		client.astronomy('astronomy', opts_half, function(err, res){
			if(err) return done(err);
			res = res.moon_phase;
			res.should.have.property('ageOfMoon');
			return done();
		});
	});
	it('currentHurricane', function(done){
		client.currentHurricane('currenthurricane', '', function(err, res){
			if(err) return done(err);
			res = res.currenthurricane;
			res.should.be.an.array;
			return done();
		});
	});
	it('currentHurricane + opts', function(done){
		client.currentHurricane('currenthurricane', opts_full, function(err, res){
			if(err) return done(err);
			res = res.currenthurricane;
			res.should.be.an.array;
			return done();
		});
	});
	it('geolookup', function(done){
		client.geolookup('geolookup', '', function(err, res){
			if(err) return done(err);
			res = res.location;
			res.should.have.property('country');
			return done();
		});
	});
	it('geolookup + opts', function(done){
		client.geolookup('geolookup', opts_half, function(err, res){
			if(err) return done(err);
			res = res.location;
			res.should.have.property('country');
			return done();
		});
	});
	it('history', function(done){
		client.history('history', '20110521', '', function(err, res){
			if(err) return done(err);
			res = res.history;
			res.should.have.property('date');
			return done();
		});
	});
	it('history + opts', function(done){
		client.history('history', '20110521', opts_full, function(err, res){
			if(err) return done(err);
			res = res.history;
			res.should.have.property('date');
			return done();
		});
	});
	it('planner', function(done){
		client.planner('planner', '05210528', '', function(err, res){
			if(err) return done(err);
			res = res.trip;
			res.should.have.property('title');
			return done();
		});
	});
	it('planner + opts', function(done){
		client.planner('planner', '05210528', opts_half, function(err, res){
			if(err) return done(err);
			res = res.trip;
			res.should.have.property('title');
			return done();
		});
	});
	it('rawtide', function(done){
		client.rawtide('rawtide', '', function(err, res){
			if(err) return done(err);
			res = res.rawtide;
			res.should.have.property('tideInfo');
			return done();
		});
	});
	it('rawtide + opts', function(done){
		client.rawtide('rawtide', opts_full, function(err, res){
			if(err) return done(err);
			res = res.rawtide;
			res.should.have.property('tideInfo');
			return done();
		});
	});
	it('satellite', function(done){
		client.satellite('satellite', '', function(err, res){
			if(err) return done(err);
			res = res.satellite;
			res.should.have.property('image_url');
			return done();
		});
	});
	it('satellite + opts', function(done){
		client.satellite('satellite', opts_half, function(err, res){
			if(err) return done(err);
			res = res.satellite;
			res.should.have.property('image_url');
			return done();
		});
	});
	it('tide', function(done){
		client.tide('tide', '', function(err, res){
			if(err) return done(err);
			res = res.tide;
			res.should.have.property('tideInfo');
			return done();
		});
	});
	it('tide + opts', function(done){
		client.tide('tide', opts_full, function(err, res){
			if(err) return done(err);
			res = res.tide;
			res.should.have.property('tideInfo');
			return done();
		});
	});
	it('webcams', function(done){
		client.webcams('webcams', '', function(err, res){
			if(err) return done(err);
			res = res.webcams;
			res.should.be.an.array;
			return done();
		});
	});
	it('webcams + opts', function(done){
		client.webcams('webcams', opts_half, function(err, res){
			if(err) return done(err);
			res = res.webcams;
			res.should.be.an.array;
			return done();
		});
	});
	it('yesterday', function(done){
		client.yesterday('yesterday', '', function(err, res){
			if(err) return done(err);
			res = res.history;
			res.should.have.property('date')
			return done();
		});
	});
	it('yesterday + opts', function(done){
		client.yesterday('yesterday', opts_full, function(err, res){
			if(err) return done(err);
			res = res.history;
			res.should.have.property('date')
			return done();
		});
	});
});
