mapformanceApp.factory('geoCoderService', function($rootScope) {
    var service = {};

    service.geocoder = new google.maps.Geocoder();
    service.query = '';
    service.lat = 0;
    service.lng = 0;
    
    var errorMsgs = {
        ERROR            : 'There was a problem contacting the Google servers.',
        INVALID_REQUEST  : 'The search request turned out to be invalid. Probably a bug in this app.',
        OVER_QUERY_LIMIT : 'You sent way too many search requests in too short a period of time.',
        REQUEST_DENIED	 : 'Google Maps rejected your search. Ouch.',
        UNKNOWN_ERROR	 : 'A server error occurred. Please try again.',
        ZERO_RESULTS	 : 'No results found for this address.'
    };

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
        $rootScope.$broadcast('addressNotFound', errorMsgs[status]);
    };

    /**
     * 
     */
    var handleResults = function (results, status) {
        if (status !== 'OK') {
            handleFailedRequest(status);
            return;
        }
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