
 
            
function initialize() {

      var mapOptions = {
          center: new google.maps.LatLng(23.184084, -73.704414),
          zoom: 2,
          disableDefaultUI: true,
          disableDoubleClickZoom: true,
          draggable: false,
          keyboardShortcuts: false,
          minZoom:2,
        };
        var mapStyle = [
  {
    "featureType": "administrative",
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "landscape",
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "poi",
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "transit",
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
  }
];


        window.map  = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
            map.setOptions({styles: mapStyles});
}
     
google.maps.event.addDomListener(window, 'load', initialize);
    
    

// 

