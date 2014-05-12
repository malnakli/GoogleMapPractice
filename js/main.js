
function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(23.184084, -73.704414),
          zoom: 2,
          disableDefaultUI: true,
          disableDoubleClickZoom: true,
          draggable: false,
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
}
     
google.maps.event.addDomListener(window, 'load', initialize);
    