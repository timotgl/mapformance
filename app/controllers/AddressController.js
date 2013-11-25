mapformanceApp.controller('AddressController', function ($scope) {
    $scope.names = ['Timo', 'Bino'];
    this.queryDefault = 'Rigaer Str. 4, 10247 Berlin';
    this.query = this.queryDefault;
    this.searchForAddress = function () {
        console.log('Searching addresses for query:', this.query);
    };
});