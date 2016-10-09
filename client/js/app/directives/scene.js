angular.module('hackathonApp')
    .directive('scene', scene);

scene.$inject = ['$window', '$timeout', '$firebaseObject'];

function scene($window, $timeout, $firebaseObject) {
    return {
        restrict: 'E',
        templateUrl: '/js/app/directives/scene.tpl.html',
        scope: {
            'sceneId': '=',
        },
        link: function(scope, el, attr){
            console.log('scene loaded');
            console.log(scope.sceneId);
            switch(scope.sceneId){
                case 'odaiba':
                    scope.sceneSrc = '../assets/pan1.jpg';
                    break;
                case 'mountains':
                    scope.sceneSrc = '../assets/pan2.jpg';
                    break;
                case 'night':
                    scope.sceneSrc = '../assets/street.jpg';
                    break;
                default:
                    scope.sceneSrc = '../assets/pan1.jpg';
            }

            // var ref = firebase.database().ref().child("default").child("entities").child('-KTe_d_6_n2nWUt1I72Z');

            // scope.posx = $firebaseObject(ref).position.x;
            // scope.posy = $firebaseObject(ref).position.y;
            // scope.posz = $firebaseObject(ref).position.z;
        }
    };
};