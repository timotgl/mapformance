mapformanceApp.controller('MarkerListController', function ($scope, geoCoderService, $rootScope) {

    // Store the address query of each marker in the order of their addition to the map.
    $scope.markers = [];

    // Store total number of markers in the list.
    $scope.total = 0;

    /**
     * List the address of the newly added marker.
     */
    $scope.listMarker = function () {
        $scope.$apply(function () {
            $scope.markers.push(geoCoderService.query);
            $scope.total += 1;
        });
    };

    /**
     * Remove a marker from the list.
     */
    $scope.removeMarker = function (index, address) {
        $scope.markers.splice(index, 1);
        $scope.total -= 1;
        $rootScope.$broadcast('markerRemoved', address);
    };

    /**
     * Remove all markers from the list.
     */
    $scope.removeAllMarkers = function () {
        $scope.markers = [];
        $scope.total = 0;
        $rootScope.$broadcast('allMarkersRemoved');
    };

    /**
     * Notify other widgets that a marker was selected in the list.
     */
    $scope.selectMarker = function (address) {
        $rootScope.$broadcast('markerSelected', address);
    };

    /**
     * Notify other widgets that the user requested to see all markers at once.
     */
    $scope.showAllMarkers = function () {
        $rootScope.$broadcast('showAllMarkersRequested');
    };

    $scope.$on('markerAdded', $scope.listMarker);
});