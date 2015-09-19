'use strict';

angular.module('section50.sections', ['ui.router','firebase'])

.config(['$stateProvider',
	function($stateProvider) {
	  $stateProvider.state('section', {
	  	abstract: true,
	  	url: '/section',
	  	templateUrl: 'partials/sections.html',
	  	controller: 'SectionCtrl'
	  })
	  .state('section.2', {
	    url: '/2',
	    templateUrl: 'partials/sections/2.html',
	    controller: 'SectionTwoCtrl'
	  })
	}])

.controller('SectionCtrl',['$scope','$state','$firebaseObject','$firebaseAuth',function($scope,$state,$firebaseObject,$firebaseAuth){

	var ref = new Firebase("https://resplendent-torch-491.firebaseio.com/");

	var auth = $firebaseAuth(ref)

	$scope.authUser = function(){
		// login with Facebook
		auth.$authWithOAuthPopup("google").then(function(authData) {
			$scope.authenticated = true;
			$scope.admin = (authData.uid === "google:104189115997275409528")
			
			var obj = $firebaseObject(ref.child('sections').child('2').child(authData.uid))
			obj.$bindTo($scope, "data");

		}).catch(function(error) {
			$scope.authenticated = false;
		});
	}
}])
.controller('SectionTwoCtrl',['$scope','$state',function($scope,$state,keydownService){


}])
