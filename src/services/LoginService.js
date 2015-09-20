'use strict';

angular.module('section50.login', [])
.factory('LoginService', ['$firebaseAuth',function($firebaseAuth){

	var authUser = function(cb){
		
		var ref = new Firebase("https://resplendent-torch-491.firebaseio.com/");
		var auth = $firebaseAuth(ref)

		// login with Google
		auth.$authWithOAuthPopup("google").then(function(authData) {

			var admin = (authData.uid === "google:104189115997275409528")
			cb(authData, true, admin)

		}).catch(function(error) {
			cb(null,false,false)
		});
	}

	return {
		authUser: authUser
	}

}])

