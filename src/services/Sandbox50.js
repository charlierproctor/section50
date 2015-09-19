'use strict';

angular.module('section50.sandbox50', [])
.factory('Sandbox50Service', ['$http',function($http){

	var upload = function(filename,data,cb){
		$http.post('http://run.cs50.net:80/upload', {
			filename: data
		})
		.success(function(data, status, headers, config) {
			cb(data)
	  	});
	}

	var run = function(homedir,cmd,cb) {
		$http.post('http://run.cs50.net:80/run', {
		    "cmd": cmd,
		    "sandbox": {
		    	"homedir": homedir
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

