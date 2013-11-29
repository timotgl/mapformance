var mapformanceApp = angular.module('mapformanceApp', []);
function onGoogleReady() {
    
    angular.element(document).ready(function () {
        angular.bootstrap(document.getElementById('rootElem'), ['mapformanceApp']);
    });
}