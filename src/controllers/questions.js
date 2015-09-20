'use strict';

angular.module('section50.questions', ['ui.router','firebase'])

.config(['$stateProvider',
	function($stateProvider) {
	  $stateProvider.state('questions', {
	  	url: '/questions/:num',
	  	templateUrl: 'partials/questions.html',
	  	controller: 'QuestionsCtrl'
	  })
	}])

.controller('QuestionsCtrl',['$scope','$state','LoginService','$rootScope','$firebaseArray','$stateParams',
	function($scope,$state,$login,$rootScope,$firebaseArray,$stateParams){
	if (!$rootScope.authenticated){
		$state.go('splash')
	} else {
		var ref = new Firebase("https://resplendent-torch-491.firebaseio.com/").child('questions').child($stateParams.num)
		$scope.questions = $firebaseArray(ref)

		$scope.newQuestion = function() {
			$scope.questions.$add({
				name: $rootScope.authData.google.displayName || "",
		  		text: $scope.questiontext,
		  		date: Date.now()
			});
		};
	}
}])
