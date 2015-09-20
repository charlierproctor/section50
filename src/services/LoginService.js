'use strict';

angular.module('section50.login', [])
.factory('LoginService', ['$firebaseAuth','$firebaseObject',function($firebaseAuth,$firebaseObject){

	var authUser = function(cb){
		
		var ref = new Firebase("https://resplendent-torch-491.firebaseio.com/");
		var auth = $firebaseAuth(ref)

		// login with Google
		auth.$authWithOAuthPopup("google").then(function(authData) {

			var obj = $firebaseObject(ref.child('users').child(authData.uid))
			obj.$value = {
				name: authData.google.displayName
			}
			obj.$save()

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

