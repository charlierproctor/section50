'use strict';

angular.module('section50.present', ['ui.router','firebase'])

.config(['$stateProvider',
	function($stateProvider) {
	  $stateProvider.state('present', {
	  	abstract: true,
	  	url: '/present',
	  	templateUrl: 'partials/present.html',
	  	controller: 'PresentCtrl'
	  })
	  .state('present.users', {
	    url: '/users',
	    templateUrl: 'partials/present/users.html',
	    controller: 'PresentUsersCtrl'
	  })
	  .state('present.solutions', {
	  	url: '/solutions/:num/:name',
	  	templateUrl: 'partials/present/solutions.html',
	    controller: 'PresentSolutionsCtrl'
	  })
	}])

.controller('PresentCtrl',['$scope','$state','LoginService','$rootScope',function($scope,$state,$login,$rootScope){
	if (!$rootScope.admin){
		$state.go('splash')
	}
	
}])
.controller('PresentUsersCtrl',['$scope','$state','$firebaseArray',function($scope,$state,$firebaseArray){
	var ref = new Firebase("https://resplendent-torch-491.firebaseio.com/").child('users')

	$scope.users = $firebaseArray(ref)
}])
.controller('PresentSolutionsCtrl',['$scope','$state','$firebaseArray','$stateParams',function($scope,$state,$firebaseArray,$stateParams){
	var ref = new Firebase("https://resplendent-torch-491.firebaseio.com/")
	.child('sections').child($stateParams.num).child($stateParams.name)

	$scope.solutions = $firebaseArray(ref)
}])
