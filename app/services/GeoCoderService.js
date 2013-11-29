mapformanceApp.factory('geoCoderService', function($rootScope) {
    var service = {};

    service.geocoder = new google.maps.Geocoder();
    service.query = '';
    service.lat = 0;
    service.lng = 0;
    

    /**
     * 
     */
    var saveResult = function (query, lat, lng) {
        service.query = query;
        service.lat = lat;
        service.lng = lng;
        $rootScope.$broadcast('addressFound');
    };

    /**
     * 
     */
    var handleFailedRequest = function (status) {
        console.log('handleFailedRequest: status=', status);
    };

    /**
     * 
     */
    var handleResults = function (results, status) {
        if (status !== 'OK') {
            handleFailedRequest(status);
            return;
        }
        console.log('status:', status);
        console.log('results:', results);
        var firstResult = results[0];
        var query = firstResult.formatted_address;
        var lat = firstResult.geometry.location.ob;
        var lng = firstResult.geometry.location.pb;
        console.log('formatted_address:', query);
        console.log('lat:', lat);
        console.log('lng:', lng);
        saveResult(query, lat, lng);
    };

    /**
     * 
     */
    service.getFirstResultForAddress = function (address) {
        var request = {
            address: address,
            region: 'de'
        };
        service.geocoder.geocode(request, handleResults);
    };

    return service;
});
console.log('GeoCoderService loaded');