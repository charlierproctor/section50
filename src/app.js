'use strict';

angular.module('section50', [
  'ui.router',
  'section50.sections',
  'section50.menu',
  'section50.sandbox50',
  'section50.editor',
  'section50.login',
  'ui.ace',
  'firebase',
  'hc.marked'
]).
config(['$stateProvider','$urlRouterProvider','markedProvider',
	function($stateProvider,$urlRouterProvider,markedProvider) {
		$urlRouterProvider.otherwise("/section/2");
		markedProvider.setOptions({
			gfm: true,
			highlight: function (code) {
				return hljs.highlightAuto(code).value;
			}
		});
	}])
