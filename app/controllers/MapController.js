mapformanceApp.controller('MapController', function ($scope) {
    $scope.mapOptions = {
        center : new google.maps.LatLng(52.518108, 13.454538),
        zoom : 15,
        mapTypeId : google.maps.MapTypeId.ROADMAP
    };
});