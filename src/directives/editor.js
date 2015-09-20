'use strict';

angular.module('section50.editor',[])
.directive('editor', ['$firebaseObject','$http',function($firebaseObject,$http){
	return {
		templateUrl: 'partials/editor.html',
		restrict: 'E',
		link: function(scope,elem,attrs){

			if (attrs["uid"]) {
				var ref = new Firebase("https://resplendent-torch-491.firebaseio.com/")
				.child('sections').child(attrs["section"]).child(attrs["problem"]).child(attrs["uid"])

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
								text: data,
								name: attrs["name"]
							}
							obj.$save()
						} 
					})
				});

			}

		},
		scope: {
			problem: '='
		}
	}
}])