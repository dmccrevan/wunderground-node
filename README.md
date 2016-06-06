# wunderground-node

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

#Testing
 `$ mocha`

# Contributing
 See [Issues](https://github.com/dmccrevan/wunderground-node/issues)

# License
 This code is licensed under the MIT license. Full license text is available in [LICENSE](https://github.com/dmccrevan/wunderground-node/blob/master/LICENSE)
