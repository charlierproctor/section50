'use strict';

angular.module('section50.jeopardy',[])
.directive('jeopardy', ['$state','ngDialog',function($state,ngDialog){
	return {
		templateUrl: 'partials/jeopardy.html',
		restrict: 'E',
		link: function(scope, elem, attrs){
			scope.show = function(row,col) {
				console.log("showing " + row + ", " + col)
		      	
		      	scope.mdsrc = attrs["url"] + '/' + row + '.' + col + '.md'

		      	ngDialog.open({ 
		      		template: 'partials/jeopardy.question.html',
		      		scope: scope,
		      		controller: 'JeopardyQuestionsCtrl'
		      	});
			}
		}
	}
}])

.controller('JeopardyQuestionsCtrl',['$scope','$state',function($scope,$state){
	
}])