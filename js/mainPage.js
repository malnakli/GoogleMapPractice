var beaches = [
  ['SHANGHAI', 31.200829, 121.882963, 4],
  ['Black Sea', 42.785128, 32.761876, 5],
  ['Sydney', -33.990477, 151.263147, 3],
  ['Vancouver, BC', 48.586935, -125.111676, 2],
  ['South Carolina', 32.584118, -79.745206, 1]
];
 
 
      
function initialize() {

      var mapOptions = {
          center: new google.maps.LatLng(11.289703, -81.464677),
          zoom: 2,
          disableDefaultUI: true,
          disableDoubleClickZoom: true,
          draggable: false,
          keyboardShortcuts: false,
          minZoom:2,
        };
       
        var mapStyle = [
						  {
							"featureType": "administrative.country",
							"stylers": [
							  { "visibility": "on" }
							]
						  },{
							"featureType": "administrative.province",
							"stylers": [
							  { "visibility": "off" }
							]
						  },{
							"featureType": "administrative.locality",
							"stylers": [
							  { "visibility": "off" }
							]
						  },{
							"featureType": "administrative.neighborhood",
							"stylers": [
							  { "visibility": "off" }
							]
						  },{
							"featureType": "administrative.land_parcel",
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
					
							"stylers": [
							  { "visibility": "off" }
							]
						  },{
							"featureType": "transit",
							
							"stylers": [
							  { "visibility": "off" }
							]
						  },{
						  }
						];

		// set the map to the specified div
        window.map  = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
            map.setOptions({styles: mapStyle});
         
         // when the map clicked twice   
    	google.maps.event.addListener(map, 'click', function(e) {
    	
            var zoomToNumber = window.map.getZoom() +1;
			var getClickedPostion = e.latLng
			window.map.setCenter(getClickedPostion);
			window.map.setZoom(zoomToNumber);
    		 setMarkers(window.map, beaches);
  		});
		
		
		
		

		 
		 
		
}
     
google.maps.event.addDomListener(window, 'load', initialize);
    
    




// marker and infowindow


function setMarkers(map, locations) {
  // Add markers to the map

  // Marker sizes are expressed as a Size of X,Y
  // where the origin of the image (0,0) is located
  // in the top left of the image.

  // Origins, anchor positions and coordinates of the marker
  // increase in the X direction to the right and in
  // the Y direction down.
  var image = {
    url: 'images/anchor_16.png',
    // This marker is 20 pixels wide by 32 pixels tall.
    size: new google.maps.Size(30, 42),
    // The origin for this image is 0,0.
    origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the flagpole at 0,32.
    anchor: new google.maps.Point(0, 32)
  };
  // Shapes define the clickable region of the icon.
  // The type defines an HTML &lt;area&gt; element 'poly' which
  // traces out a polygon as a series of X,Y points. The final
  // coordinate closes the poly by connecting to the first
  // coordinate.
  var shape = {
      coords: [1, 1, 1, 20, 18, 20, 18 , 1],
      type: 'poly'
  };
  
  
  for (var i = 0; i < locations.length; i++) {
    var beach = locations[i];
    var myLatLng = new google.maps.LatLng(beach[1], beach[2]);
   var   marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image,
        shape: shape,
        title: beach[0],
        zIndex: beach[3]
    });

  var infowindow = new google.maps.InfoWindow();
  
  //The drawback of this code is that, it creates many handlers (function objects), one for each maker
 	 google.maps.event.addListener(marker, 'click', (function( marker,title) {
    	 return function() {
			var contentString = '<div id="content">'+
		      '<div id="siteNotice">'+
		      '</div>'+
		      '<h1 id="firstHeading" class="firstHeading">' + title+ '</h1>'+
		      '<div id="bodyContent">'+
		      '</div>'+
		      '</div>';
		
        infowindow.setContent(contentString);
        infowindow.open(map, marker);
    	}
	
	})(marker, beach[0]));
	// An alternative solution
	// google.maps.event.addListener(marker, 'click', function() {
// 	    infowindow.setContent(p[2]);
// 	    infowindow.open(map, marker);
// 	});

	
  }
}


// 

