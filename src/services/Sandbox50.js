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

	var runHelper = function(dataHash,cb) {

		$http({
			method: 'POST',
			url: '/run',
			data: dataHash
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
		runHelper(dataHash,cb);
	}
	var runAgain = function(sandbox,cmd,cb) {
		var dataHash = {
			"cmd": cmd,
		    "sandbox": sandbox
		}
		console.log(dataHash)
		runHelper(dataHash,cb);
	}

  	return {
  		upload: upload,
  		run: run,
  		runAgain: runAgain
  	}
}])

