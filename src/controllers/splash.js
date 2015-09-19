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

.controller('SplashCtrl',['$scope','$state','KeydownService',function($scope,$state,keydownService){
	$scope.info = function(subj){
				$state.go('pages.' + subj)
			}

	// a,c,p take you to respective pages.
	keydownService.registerKeydown('splash',65,function(){
		$state.go('pages.about')
	})
	keydownService.registerKeydown('splash',67,function(){
		$state.go('pages.code')
	})
	keydownService.registerKeydown('splash',80,function(){
		$state.go('pages.photography')
	})
}])
