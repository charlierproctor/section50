'use strict';

angular.module('section50', [
  'ui.router',
  'section50.sections',
  'section50.menu',
  'ui.ace',
  'firebase'
]).
config(['$stateProvider','$urlRouterProvider',
	function($stateProvider,$urlRouterProvider) {
		$urlRouterProvider.otherwise("/section/2");
	}])
