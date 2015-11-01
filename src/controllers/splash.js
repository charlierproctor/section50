'use strict';

angular.module('section50.splash', ['ui.router'])

.config(['$stateProvider',
	function($stateProvider) {
	  $stateProvider.state('splash', {
	    url: '/',
	    templateUrl: 'partials/splash.html',
	    controller: 'SplashCtrl'
	  })
	}])

.controller('SplashCtrl',['$scope','$state','LoginService','$rootScope',function($scope,$state,$login,$rootScope){
	$scope.authUser = function(){ 
		$login.authUser(function(authData, authenticated, admin){
			$rootScope.authenticated = authenticated
			$rootScope.admin = admin
			$rootScope.authData = authData
			console.log(authData)
			if (authenticated) {
				$state.go('section.8')
			}
		})
	}
}])
