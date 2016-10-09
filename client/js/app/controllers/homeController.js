angular.module('hackathonApp').controller('HomeController', HomeController);

HomeController.$inject = [
    '$scope',
    '$http',
    '$firebaseArray',
    '$firebaseAuth',
    '$routeParams'
];

function HomeController(
    $scope,
    $http,
    $firebaseArray,
    $firebaseAuth,
    $routeParams
) {
    $scope.sceneId = $routeParams.sceneId;
    console.log($scope.scene);
}
