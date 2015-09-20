'use strict';

angular.module('section50.sandbox50', [])
.factory('Sandbox50Service', ['$http',function($http){

	var transformRequest = function(obj) {
	    var str = [];
	    for(var p in obj)
	    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
	    return str.join("&");
	}

	var upload = function(filename,data,cb){

		var dataHash = {}
		dataHash[filename] = data 

		$http({
			method: 'POST',
			url: 'http://run.cs50.net:80/upload', 
			transformRequest: transformRequest,
		    data: dataHash,
			headers : {
                'Content-Type' : 'application/x-www-form-urlencoded'
            }
        })
		.success(function(data, status, headers, config) {
			cb(data)
	  	});
	}

	var run = function(homedir,cmd,cb) {

		var dataHash = {
			"cmd": cmd,
		    "sandbox": {
		    	"homedir": homedir
		    }
		}

		$http({
			method: 'POST',
			url: 'http://run.cs50.net:80/run',
			data: dataHash,
			headers: {
				'Content-Type' : 'application/json'
			}
		})
		.success(function(data, status, headers, config) {
			cb(data)
	  	});
	}
  	return {
  		upload: upload,
  		run: run
  	}
}])

