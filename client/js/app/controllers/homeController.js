angular.module('hackathonApp').controller('HomeController', HomeController);

HomeController.$inject = [
    '$scope',
    '$http',
    '$firebaseArray',
    '$firebaseAuth'
];

function HomeController(
    $scope,
    $http,
    $firebaseArray,
    $firebaseAuth
) {

    var auth = $firebaseAuth();

    // login with Facebook
    auth.$signInWithPopup("facebook").then(function(firebaseUser) {
        console.log(firebaseUser);
        console.log("Signed in as:", firebaseUser.user.uid);
    }).catch(function(error) {
        console.log("Authentication failed:", error);
    });

    var ref = firebase.database().ref().child("messages");
    $scope.messages = $firebaseArray(ref);
    $scope.addMessage = function(){
        $scope.messages.$add({
            text: $scope.newMessageText
        });
    }
}
