mapformanceApp.controller('MarkerListController', function ($scope, geoCoderService, $rootScope) {

    // Store the address query of each marker in the order of their addition to the map.
    $scope.markers = [];
    
    // Store total number of markers in the list.
    $scope.total = 0;
    
    $scope.listMarker = function () {
        $scope.$apply(function () {
            $scope.markers.push(geoCoderService.query);
            $scope.total += 1;
            console.log('markers in list:', $scope.markers); 
        });
    };
    
    $scope.removeMarker = function (index, address) {
        $scope.markers.splice(index, 1);
        $scope.total -= 1;
        $rootScope.$broadcast('markerRemoved', address);
    };
    
    $scope.removeAllMarkers = function () {
        $scope.markers = [];
        $scope.total = 0;
        $rootScope.$broadcast('allMarkersRemoved');
    };
    
    $scope.$on('markerAdded', $scope.listMarker);
});