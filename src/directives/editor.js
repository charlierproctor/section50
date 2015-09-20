'use strict';

angular.module('section50.editor',[])
.directive('editor', ['$firebaseObject','$http','Sandbox50Service',function($firebaseObject,$http,$sandbox){
	return {
		templateUrl: 'partials/editor.html',
		restrict: 'E',
		link: function(scope,elem,attrs){

			if (attrs["uid"]) {
				var ref = new Firebase("https://resplendent-torch-491.firebaseio.com/")
				.child('sections').child(attrs["section"]).child(attrs["uid"]).child(attrs["problem"])

				var obj = $firebaseObject(ref)

				scope.problem = {}

				var cpath = 'data/problems/' + attrs['section'] + '/' + attrs['problem'] + '.c'

				// grab the c boilerplate
				$http.get(cpath)
				.success(function(data, status, headers, config) {
					obj.$loaded().then(function(){

						// establish three-way data binding
						obj.$bindTo(scope,"problem")

						// no text yet... load boilerplate
						if (!obj.$value || obj.$value == "") {
							obj.$value = {
								text: data
							}
							obj.$save()
						} 
					})
				});


				var filename, tests
				var jsonpath = 'data/problems/' + attrs['section'] + '/' + attrs['problem'] + '.json'
				$http.get(jsonpath)
				.success(function(data, status, headers, config) {
					filename = data.filename;
					tests = data.tests;
			  	});

			  	scope.run = function(){
					$sandbox.upload(filename,scope.problem.text,function(uploadRes){
						console.log(uploadRes)
						$sandbox.run(uploadRes.id,'make ' + filename,function(runRes){
							console.log(runRes)
						})
					})
				}
			}

		},
		scope: {
			problem: '=',
			run: '='
		}
	}
}])