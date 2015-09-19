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
	    templateUrl: 'partials/2.html',
	    controller: 'SectionTwoCtrl'
	  })
	}])

.controller('SectionCtrl',['$scope','$state','$firebaseObject','$firebaseAuth',function($scope,$state,$firebaseObject,$firebaseAuth){

	var ref = new Firebase("https://resplendent-torch-491.firebaseio.com/");

	var auth = $firebaseAuth(ref)
	
	// login with Facebook
  auth.$authWithOAuthPopup("google").then(function(authData) {
    console.log("Logged in as:", authData.uid);
  }).catch(function(error) {
    console.log("Authentication failed:", error);
  });

	var obj = $firebaseObject(ref.child('sections'))

	obj.$bindTo($scope, "data");
}])
.controller('SectionTwoCtrl',['$scope','$state',function($scope,$state,keydownService){


}])
