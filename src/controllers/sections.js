'use strict';

angular.module('section50.sections', ['ui.router'])

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

.controller('SectionCtrl',['$scope','$state',function($scope,$state,keydownService){

}])
.controller('SectionTwoCtrl',['$scope','$state',function($scope,$state,keydownService){


}])
