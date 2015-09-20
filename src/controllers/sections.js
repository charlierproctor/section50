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

.controller('SectionCtrl',['$scope','$state','LoginService','$rootScope',function($scope,$state,$login,$rootScope){

	$scope.authUser = function(){ 
		$login.authUser(function(admin, authenticated, authData){
			$rootScope.authenticated = $login.authenticated
			$rootScope.admin = $login.admin
			$rootScope.authData = authData
		})
	}
	
}])
.controller('SectionTwoCtrl',['$scope','$state',function($scope,$state){

}])
