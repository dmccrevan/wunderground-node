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
		client.forecast(function(err, res){
			if(err) return done(err);
			res = res.hourly_forecast;
			res.should.be.an.array;
			return done();
		});
	});
	it('.hourly10day', function(done){
		client.forecast(function(err, res){
			if(err) return done(err);
			res = res.hourly_forecast;
			res.should.be.an.array;
			return done();
		});
	});
	it('.alerts', function(done){
		client.forecast(function(err, res){
			if(err) return done(err);
			res = res.alerts;
			res.should.be.an.array;
			return done();
		});
	});
});
