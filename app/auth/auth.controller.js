angular.module('angularfireSlackApp')
  .controller('AuthCtrl', function(Auth, $state){
    var authCtrl = this;

    authCtrl.user = {
		email: '',
		password: '',
		userType:''
    };
    authCtrl.login = function (){
	  Auth.$signInWithEmailAndPassword(authCtrl.user.email, authCtrl.user.password).then(function (auth){
	  	// $state.go('profile');
	  	// console.log("Thank You");
	  }, function (error) {
	    authCtrl.error = error;
	  });
	};
	authCtrl.register = function (){
	  Auth.$createUserWithEmailAndPassword(authCtrl.user.email, authCtrl.user.password).then(function (user){
	    $state.go('profile');
	  }, function (error){
	    authCtrl.error = error;
	  });
	};
  });