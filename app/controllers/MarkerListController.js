mapformanceApp.controller('MarkerListController', function ($scope, geoCoderService) {
    this.total = 0;
    
    // Store the address query of each marker in the order of their addition to the map.
    var markers = [];
    
    var listMarker = function () {
        markers.push(geoCoderService.query);
        console.log('markers in list:', markers);
    };
    
    $scope.$on('markerAdded', listMarker);
});