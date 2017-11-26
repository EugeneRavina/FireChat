angular.module('angularfireSlackApp')
  .controller('ChannelsCtrl', function($state, Auth, Users, profile, channels){
    var channelsCtrl = this;
    //User set Online
    Users.setOnline(profile.$id);
    //Channels
    channelsCtrl.profile = profile;
	channelsCtrl.channels = channels;
	channelsCtrl.users = Users.all;
	channelsCtrl.getDisplayName = Users.getDisplayName;
	channelsCtrl.getGravatar = Users.getGravatar;
    // Channels Name
    channelsCtrl.newChannel = {
	  name: ''
	};
	//Channels Create
	channelsCtrl.createChannel = function(){
	  channelsCtrl.channels.$add(channelsCtrl.newChannel).then(function(ref){
	  	$state.go('channels.messages', {channelId: ref.key});
	    channelsCtrl.newChannel = {
	      name: ''
	    };
	  });
	};
    //Channels Logout
	channelsCtrl.logout = function(){
	  channelsCtrl.profile.online = null;
	  channelsCtrl.profile.$save().then(function(){
	    Auth.$signOut().then(function(){
	      $state.go('home');
	    });
	  });
	};

  });