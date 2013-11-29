mapformanceApp.controller('MapController', function ($scope, geoCoderService, $rootScope) {
    // Store marker objects indexed by their formatted address.
    var markers = {};
    
    // Initialize the google map
    google.maps.visualRefresh = true;
    var mapContainer = document.getElementById('map');
    var map = new google.maps.Map(
        mapContainer,
        {
            zoom: 15,
            center: new google.maps.LatLng(52.518108, 13.454538),
            mapTypeId : google.maps.MapTypeId.ROADMAP
        }
    );

    /**
     * Add a marker to the map when an address search was successful.
     */
    var addMarker = function (event) {
        // Don't create a marker for an already existing address.
        if (markers.hasOwnProperty(geoCoderService.query)) {
            return;
        }
        
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(
                geoCoderService.lat,
                geoCoderService.lng
            ),
            title:"Hello World!"
        });
        marker.setMap(map);
        markers[geoCoderService.query] = marker;
        console.log('markers on map:', markers);

        $rootScope.$broadcast('markerAdded');
    };
    
    var removeMarker = function (event, address) {
        var marker = markers[address];
        marker.setMap(null);
        delete markers[address];
    };
    
    var removeAllMarkers = function (event) {
        angular.forEach(markers, function(marker, address) {
            marker.setMap(null);
        });
        markers = {};
    };
    
    $scope.$on('addressFound', addMarker);
    $scope.$on('markerRemoved', removeMarker);
    $scope.$on('allMarkersRemoved', removeAllMarkers);
});