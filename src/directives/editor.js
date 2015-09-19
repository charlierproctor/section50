'use strict';

angular.module('section50.editor',[])
.directive('editor', ['$firebaseObject','$http',function($firebaseObject,$http){
	return {
		templateUrl: 'partials/editor.html',
		restrict: 'E',
		link: function(scope,elem,attrs){

			var ref = new Firebase("https://resplendent-torch-491.firebaseio.com/");
			var obj = $firebaseObject(ref.child('sections').child(attrs["section"])
				.child(attrs["uid"])).child(attrs["problem"])
			obj.$bindTo(scope, "problem");

			$http.get('data/problems/' + attrs['section'] + '/' + attrs['problem'] + attrs['.c'])
			.success(function(data, status, headers, config) {
				scope.problem.text = data;
				console.log(data)
		  	});

			$http.get('data/problems/' + attrs['section'] + '/' + attrs['problem'] + attrs['.json'])
			.success(function(data, status, headers, config) {
				scope.problem.filename = data.filename;
				scope.problem.tests = data.tests;
		  	});

		}
	}
}])