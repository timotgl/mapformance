mapformanceApp.controller('AddressController', function ($scope, addMarkerService) {
    this.queryDefault = 'Rigaer Str. 4, 10247 Berlin';
    this.query = this.queryDefault;
    this.addMarkerForAddress = function () {
        console.log('Searching addresses for query:', this.query);
        addMarkerService.addMarker(52.518108, 13.454538, this.query);
    };
});