var mapformanceApp = angular.module('mapformanceApp', []);
mapformanceApp.factory('addMarkerService', function($rootScope) {
    var sharedService = {};
    
    sharedService.query = '';
    sharedService.lat = 0;
    sharedService.long = 0;

    sharedService.addMarker = function(lat, long, query) {
        this.query = query;
        this.lat = lat;
        this.long = long;
        $rootScope.$broadcast('markerAdded');
    };

    return sharedService;
});


function onGoogleReady() {
    console.log('onGoogleReady');
    angular.bootstrap(document.getElementById('rootElem'), ['mapformanceApp']);
}