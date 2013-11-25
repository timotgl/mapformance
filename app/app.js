var mapformanceApp = angular.module('mapformanceApp', ['ui.map']);

function onGoogleReady() {
    console.log('onGoogleReady');
    angular.bootstrap(document.getElementById('rootElem'), ['mapformanceApp']);
}