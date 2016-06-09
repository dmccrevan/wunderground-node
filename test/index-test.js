var wunderground = require('../index.js');
var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var client = new wunderground(process.env.KEY, 'Boston', 'MA');

chai.use(chaiHttp);

describe('wunderground api', function(){
	it('.conditions', function(done){
		client.conditions(function(err, res){
			if(err) return done(err);
			res.should.be.an.object;
			res.current_observation.display_location.full.should.eql('Boston, MA');
			res.current_observation.should.have.property('weather');
			return done();
		});
	});
	it('.forecast', function(done){
		client.forecast(function(err, res){
			if(err) return done(err);
			res = res.forecast.txt_forecast.forecastday;
			res.should.be.an.array;
			return done();
		});
	});
	it('.forecast10day', function(done){
		client.forecast10day(function(err, res){
			if(err) return done(err);
			res = res.forecast.txt_forecast.forecastday;
			res.should.be.an.array;
			return done();
		});
	});
	it('.hourly', function(done){
		client.hourly(function(err, res){
			if(err) return done(err);
			res = res.hourly_forecast;
			res.should.be.an.array;
			return done();
		});
	});
	it('.hourly10day', function(done){
		client.hourly10day(function(err, res){
			if(err) return done(err);
			res = res.hourly_forecast;
			res.should.be.an.array;
			return done();
		});
	});
	it('.alerts', function(done){
		client.alerts(function(err, res){
			if(err) return done(err);
			res = res.alerts;
			res.should.be.an.array;
			return done();
		});
	});
	it('.almanac', function(done){
		client.almanac(function(err, res){
			if(err) return done(err);
			res = res.almanac;
			res.should.have.property('temp_high');
			return done();
		});
	});
	it('.astronomy', function(done){
		client.astronomy(function(err, res){
			if(err) return done(err);
			res = res.moon_phase;
			res.should.have.property('ageOfMoon');
			return done();
		});
	});
	it('.currentHurricane', function(done){
		client.currentHurricane(function(err, res){
			if(err) return done(err);
			res = res.currenthurricane;
			res.should.be.an.array;
			return done();
		});
	});
	it('.geolookup', function(done){
		client.geolookup(function(err, res){
			if(err) return done(err);
			res = res.location;
			res.should.have.property('country');
			return done();
		});
	});
	it('.history', function(done){
		client.history('20110521', function(err, res){
			if(err) return done(err);
			res = res.history;
			res.should.have.property('date');
			return done();
		});
	});
	it('.planner', function(done){
		client.planner('05210528', function(err, res){
			if(err) return done(err);
			res = res.trip;
			res.should.have.property('title');
			return done();
		});
	});
	it('.rawtide', function(done){
		client.rawtide(function(err, res){
			if(err) return done(err);
			res = res.rawtide;
			res.should.have.property('tideInfo');
			return done();
		});
	});
	it('.satellite', function(done){
		client.satellite(function(err, res){
			if(err) return done(err);
			res = res.satellite;
			res.should.have.property('image_url');
			return done();
		});
	});
	it('.tide', function(done){
		client.tide(function(err, res){
			if(err) return done(err);
			res = res.tide;
			res.should.have.property('tideInfo');
			return done();
		});
	});
	it('.webcams', function(done){
		client.webcams(function(err, res){
			if(err) return done(err);
			res = res.webcams;
			res.should.be.an.array;
			return done();
		});
	});
	it('.yesterday', function(done){
		client.yesterday(function(err, res){
			if(err) return done(err);
			res = res.history;
			res.should.have.property('date')
			return done();
		});
	});
});
