mapformanceApp.factory('geoCoderService', function($rootScope) {
    var service = {};

    /**
     *  Initial setup for the internal geocoder instance and address data.
     */
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
     * Save the result of an address search and notify other widgets.
     */
    var saveResult = function (query, lat, lng) {
        service.query = query;
        service.lat = lat;
        service.lng = lng;
        $rootScope.$broadcast('addressFound');
    };

    /**
     * Notify other widgets that the search returned with an error.
     */
    var handleFailedRequest = function (status) {
        $rootScope.$broadcast('addressNotFound', errorMsgs[status]);
    };

    /**
     * Success/Failure callback for geocoder requests.
     */
    var handleResults = function (results, status) {
        if (status !== 'OK') {
            handleFailedRequest(status);
            return;
        }

        var firstResult = results[0],
            query = firstResult.formatted_address,
            lat = firstResult.geometry.location.ob,
            lng = firstResult.geometry.location.pb;

        saveResult(query, lat, lng);
    };

    /**
     * Trigger a geocoder request for an address.
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