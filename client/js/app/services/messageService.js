'use strict';

angular.module('hackathonApp')
  .service('messageService', messageService);

messageService.$inject = [
  '$firebaseArray',
  '$firebaseAuth'
];

function messageService(
  $firebaseArray, 
  $firebaseAuth
){
  var rootRef = firebase.database().val();
  
  this.subRoom = function(room_id){
    return rootRef.child('rooms/' + room_id).val();
  };

  this.createRoom = function(room_id){
    return rootRef.child('rooms').child(room_id);
  };

};
