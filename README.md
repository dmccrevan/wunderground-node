# wunderground-node
[![Build Status](https://travis-ci.org/dmccrevan/wunderground-node.svg?branch=master)](https://travis-ci.org/dmccrevan/wunderground-node)

A simple wrapper for the [Wundeground API](http://www.wunderground.com/weather/api) for Node.js

# Install
 `$ npm install wunderground-node --save`

# Usage
 ```js
 var wunderground = require('wunderground-node');
 var client = new wunderground('<api_key_here', 'Boston', 'MA');
```

# Example
 ```js
 var wunderground = require('wunderground-node');
 var client = new wunderground('<api_key_here', 'Boston', 'MA');
 client.forecast(function(err, data){
 	if(err) throw err;
 	console.log(data);
 });
 ```
 
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

### history('<YYYYMMDD')
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
