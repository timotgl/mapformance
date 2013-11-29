mapformanceApp.controller('AddressController', function ($scope, geoCoderService) {
    this.query = 'Rigaer Str. 4, 10247 Berlin';
    this.addMarkerForAddress = function () {
        console.log('Searching addresses for query:', this.query);
        geoCoderService.getFirstResultForAddress(this.query);
    };
});
console.log('AddressController loaded');