mapformanceApp.controller('AddressController', function ($scope, geoCoderService) {

    // Initial value of the text input. Allows to add a marker right away.
    $scope.query = 'Rigaer Str. 4, 10247 Berlin';
    
    /**
     * Ask the geocoder to get the first lat/long result for the address and add a marker to the map.
     * Triggered by pressing ENTER in the text input or clicking the 'Add marker' button.
     */
    $scope.addMarkerForAddress = function (event) {
        if (event === undefined || event.which === 13) {
            geoCoderService.getFirstResultForAddress($scope.query);            
        }
    };
});