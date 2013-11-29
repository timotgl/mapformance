var mapformanceApp = angular.module('mapformanceApp', []);

function onGoogleReady() {
    console.log('onGoogleReady');
    angular.bootstrap(document.getElementById('rootElem'), ['mapformanceApp']);
}