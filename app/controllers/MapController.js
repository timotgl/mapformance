mapformanceApp.controller('MapController', function ($scope, addMarkerService) {
    google.maps.visualRefresh = true;
    var map = new google.maps.Map(
        document.getElementById('googleMap'),
        {
            zoom: 15,
            center: new google.maps.LatLng(52.518108, 13.454538),
            mapTypeId : google.maps.MapTypeId.ROADMAP
        }
    );
    $scope.$on('markerAdded', function() {
        console.log('query=', addMarkerService.query);
        console.log('lat=', addMarkerService.lat);
        console.log('long=', addMarkerService.long);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(
                addMarkerService.lat,
                addMarkerService.long
            ),
            title:"Hello World!"
        });
        marker.setMap(map);
    });
});