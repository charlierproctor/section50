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
	  .state('section.3', {
	    url: '/3',
	    templateUrl: 'partials/sections/3.html',
	    controller: 'SectionThreeCtrl'
	  })
	}])

.controller('SectionCtrl',['$scope','$state','LoginService','$rootScope',function($scope,$state,$login,$rootScope){
	if (!$rootScope.authenticated){
		$state.go('splash')
	}
	
}])
.controller('SectionTwoCtrl',['$scope','$state','$rootScope','$firebaseObject','$firebaseArray',
	function($scope,$state,$rootScope,$firebaseObject,$firebaseArray){

		$scope.name = $rootScope.authData.google.displayName
		// $scope.hasteam = false

		// var ref = new Firebase("https://resplendent-torch-491.firebaseio.com/").child('teams')
		// $scope.newTeam = function(){
		// 	var newref = ref.push()
		// 	var obj = $firebaseObject(newref)
		// 	obj.$value = {
		// 		name : $scope.teamname
		// 	}
		// 	obj.$save()

		// 	$scope.hasteam = true
		// 	$scope.teamuid = obj.$key
		// }

		// $scope.teams = $firebaseArray(ref)

}])
.controller('SectionThreeCtrl',['$scope','$state','$rootScope','$firebaseObject','$firebaseArray',
	function($scope,$state,$rootScope,$firebaseObject,$firebaseArray){

		$scope.name = $rootScope.authData.google.displayName

}])
