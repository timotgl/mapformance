mapformanceApp.controller('MapController', function ($scope, geoCoderService) {
    
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
    var addMarker = function () {
        console.log('query=', geoCoderService.query);
        console.log('lat=', geoCoderService.lat);
        console.log('lng=', geoCoderService.lng);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(
                geoCoderService.lat,
                geoCoderService.lng
            ),
            title:"Hello World!"
        });
        marker.setMap(map);
    };
    
    $scope.$on('addressFound', addMarker);
});
console.log('MapController loaded');