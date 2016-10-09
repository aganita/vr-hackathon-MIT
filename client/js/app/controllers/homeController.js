angular.module('hackathonApp').controller('HomeController', HomeController);

HomeController.$inject = [
    '$scope',
    '$http'
];

function HomeController(
    $scope,
    $http
) {
    console.log('hello home');
}
