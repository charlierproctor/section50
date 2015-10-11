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
	  .state('section.4', {
	    url: '/4',
	    templateUrl: 'partials/sections/4.html',
	    controller: 'SectionFourCtrl'
	  })
	  .state('section.5', {
	    url: '/5',
	    templateUrl: 'partials/sections/5.html',
	    controller: 'SectionFiveCtrl'
	  })
	  .state('section.jeopardy5', {
	    url: '/jeopardy5',
	    templateUrl: 'partials/sections/5.jeopardy.html',
	    controller: 'JeopardyFiveCtrl'
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

}])
.controller('SectionThreeCtrl',['$scope','$state','$rootScope','$firebaseObject','$firebaseArray',
	function($scope,$state,$rootScope,$firebaseObject,$firebaseArray){

		$scope.name = $rootScope.authData.google.displayName

}])
.controller('SectionFourCtrl',['$scope','$state','$rootScope', function($scope,$state,$rootScope){

		$scope.name = $rootScope.authData.google.displayName

}])
.controller('SectionFiveCtrl',['$scope','$state','$rootScope', function($scope,$state,$rootScope){

		$scope.name = $rootScope.authData.google.displayName

		$scope.jeopardy = function(){
			$state.go('section.jeopardy5')
		}

}])
.controller('JeopardyFiveCtrl',['$scope','$state','$rootScope', function($scope,$state,$rootScope){

		$scope.name = $rootScope.authData.google.displayName

}])