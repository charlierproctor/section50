'use strict';

angular.module('section50', [
  'ui.router',
  'section50.splash',
  'section50.sections',
  'section50.questions',
  'section50.contact',
  'section50.present',
  'section50.login',
  'section50.menu',
  'section50.editor',
  'section50.jeopardy',
  'ui.ace',
  'firebase',
  'hc.marked',
  'ngDialog'
]).
config(['$stateProvider','$urlRouterProvider','markedProvider','$httpProvider',
	function($stateProvider,$urlRouterProvider,markedProvider,$httpProvider) {
		$urlRouterProvider.otherwise("/");
		markedProvider.setOptions({
			gfm: true,
      tables: true,
			highlight: function (code) {
				return hljs.highlightAuto(code).value;
			}
		});
	}])