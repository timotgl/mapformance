mapformanceApp.controller('AddressController', function ($scope, geoCoderService) {

    // Initial value of the text input. Allows to add a marker right away.
    $scope.query = 'Rigaer Str. 4, 10247 Berlin';

    // Error message text.
    $scope.status = '';

    /**
     * Ask the geocoder to get the first lat/long result for the address and add a marker to the map.
     * Triggered by pressing ENTER in the text input or clicking the 'Add marker' button.
     */
    $scope.addMarkerForAddress = function (event) {
        if (event === undefined || event.which === 13) {
            geoCoderService.getFirstResultForAddress($scope.query);
        }
    };

    var setQuery = function (event, query) {
        $scope.query = query;
    }

    /**
     * Show an error message if the geocoder didn't return any results.
     */
    var showErrorMsg = function (event, msg) {
        $scope.$apply(function () {
            $scope.status = msg;
        });

        setTimeout(
            function() {
                $scope.$apply(function () {
                    $scope.status = '';
                });
            },
            2000
        );
    };

    $scope.$on('markerSelected', setQuery);
    $scope.$on('addressNotFound', showErrorMsg);
});