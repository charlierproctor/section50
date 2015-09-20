'use strict';

angular.module('section50.menu',[])
.directive('menu', ['$state',function($state){
	return {
		templateUrl: 'partials/menu.html',
		restrict: 'E',
		link: function(scope){
			scope.goto = function(s){
				$state.go(s)
			}
		}
	}
}])