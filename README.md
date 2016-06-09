# wunderground-node
[![Build Status](https://travis-ci.org/dmccrevan/wunderground-node.svg?branch=master)](https://travis-ci.org/dmccrevan/wunderground-node)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
[![npm version](https://badge.fury.io/js/wunderground-node.svg)](https://badge.fury.io/js/wunderground-node)
[![devDependency Status](https://david-dm.org/dmccrevan/wunderground-node/dev-status.svg)](https://david-dm.org/dmccrevan/wunderground-node#info=devDependencies)
[![Code Climate](https://codeclimate.com/github/dmccrevan/wunderground-node/badges/gpa.svg)](https://codeclimate.com/github/dmccrevan/wunderground-node)


A simple wrapper for the [Wundeground API](http://www.wunderground.com/weather/api) for Node.js

# Install
 `$ npm install wunderground-node --save`

# Usage
 ```js
 var wunderground = require('wunderground-node');
 var client = new wunderground('<api_key_here', 'Boston', 'MA');
```

# Examples

 Full Init

 ```js
 var wunderground = require('wunderground-node');
 var client = new wunderground('<api_key_here', 'Boston', 'MA');

 //Gets the forecast in Boston for today
 client.forecast('forecast', '', function(err, data){
 	if(err) throw err;
 	console.log(data);
 });

 //Gets a summary of the weather in Boston on May 21st, 2011
 client.history('history', '20110521', '', function(err,data){
 	if(err) throw err;
 	console.log(data);
 });

 //Gets a summary of the weather in Boston between the dates May 21st - May 28th of this year.
 client.planner('planner', '05210528', '', function(err, data){
 	if(err) throw err;
 	console.log(data);
 });
 ```

 Half Init

  ```js
 var wunderground = require('wunderground-node');
 var client = new wunderground('<api_key_here'>);
 var opts = {
 	city: 'Boston',
 	state: 'MA'
 };

 //Gets the forecast in Boston for today
 client.forecast('forecast', opts, function(err, data){
 	if(err) throw err;
 	console.log(data);
 });

 //Gets a summary of the weather in Boston on May 21st, 2011
 client.history('history', '20110521', opts, function(err,data){
 	if(err) throw err;
 	console.log(data);
 });

 //Gets a summary of the weather in Boston between the dates May 21st - May 28th of this year.
 client.planner('planner', '05210528', opts, function(err, data){
 	if(err) throw err;
 	console.log(data);
 });
 ```

 No Init

  ```js
 var wunderground = require('wunderground-node');
 var client = new wunderground();
 var opts = {
 	key: '<api_key_here>',
 	city: 'Boston',
 	state: 'MA'
 };

 //Gets the forecast in Boston for today
 client.forecast('forecast', opts, function(err, data){
 	if(err) throw err;
 	console.log(data);
 });

 //Gets a summary of the weather in Boston on May 21st, 2011
 client.history('history', '20110521', opts, function(err,data){
 	if(err) throw err;
 	console.log(data);
 });

 //Gets a summary of the weather in Boston between the dates May 21st - May 28th of this year.
 client.planner('planner', '05210528', opts, function(err, data){
 	if(err) throw err;
 	console.log(data);
 });
 ```

# Configuration
 When configuring a new wunderground client, you must provide the following:

 ### Params
 * key - Wunderground API key
 * city - city for weather
 * state - state for weather
 
 All params are initially optional and can be overwritten using an opts object.

# API

### conditions:
 Gets the conditions for a specific location

### forecast:
 Gets the forecast for a specific location

### forecast10day:
 Gets the forecast 10 days in advance for a specific location

### hourly:
 Gets the hourly conditions for a specific location

### hourly10day:
 Gets the hourly conditions 10 days in advance for a specific location

### alerts:
 Gets the alerts for a specific location

### almanac:
 Gets the average low and high temperatures

### astronomy
 Gets the moon phases, sunrise and sunset times

### currentHurricane
 Gets information on current hurricanes and tropical storms

### geolookup
 Gets the city name, zip/postal code, latitude & longitude coordinates

### history('YYYYMMDD')
 Gets the summary of the weather on the specificed date. Must be passed into the function in the format: YYYYMMDD

### planner('MMDDMMDD')
 Gets the summary based on the time interval specified. Must be passed into the function in the format: MMDDMMDD

### rawtide
 Gets raw tidal information

### satellite
 Gets the URL to the .gif visual and infrared satellite images

### tide 
 Gets tidal information

### webcams
 Gets the locations of nearby weather stations and URLs for images from their web cams

### yesterday
 Gets the summary of the weather for yesterday

#Testing
 `$ mocha`

# Contributing
 See [Issues](https://github.com/dmccrevan/wunderground-node/issues)

# License
 This code is licensed under the MIT license. Full license text is available in [LICENSE](https://github.com/dmccrevan/wunderground-node/blob/master/LICENSE)

 [![forthebadge](http://forthebadge.com/images/badges/oooo-kill-em.svg)](http://forthebadge.com)
