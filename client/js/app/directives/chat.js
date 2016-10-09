angular.module('hackathonApp')
    .directive('chat', chat);

chat.$inject = [
    '$window', 
    '$timeout', 
    '$firebaseArray',
    '$firebaseAuth',
];

function chat($window, $timeout, $firebaseArray, $firebaseAuth) {
    return {
        restrict: 'E',
        templateUrl: '/js/app/directives/chat.tpl.html',
        scope: {
            'chatId': '=',
        },
        link: function(scope, el, attr){


            var auth = $firebaseAuth();

            auth.$signInWithPopup("facebook").then(function(firebaseUser) {
                scope.user = firebaseUser;
                console.log(scope.user.user.displayName);
                console.log("Signed in as:", firebaseUser.user.uid);
            }).catch(function(error) {
                console.log("Authentication failed:", error);
            });

            var ref = firebase.database().ref().child("scenes").child(scope.chatId);

            scope.messages = $firebaseArray(ref);
            scope.addMessage = function(){
                scope.messages.$add({
                    text: scope.newMessageText,
                    chatname: scope.user.user.displayName.charAt(0)
                });

                scope.newMessageText = null;
            };
        }
    };
};