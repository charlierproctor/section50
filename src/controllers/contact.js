'use strict';

angular.module('section50.contact', ['ui.router'])

.config(['$stateProvider',
	function($stateProvider) {
	  $stateProvider.state('contact', {
	    url: '/contact',
	    templateUrl: 'partials/contact.html',
	    controller: 'ContactCtrl'
	  })
	}])

.controller('ContactCtrl',['$scope','$state','LoginService','$rootScope',function($scope,$state,$login,$rootScope){
	if (!$rootScope.authenticated){
		$state.go('splash')
	}
}])
