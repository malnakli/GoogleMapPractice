        
function initialize() {

      var mapOptions = {
          center: new google.maps.LatLng(11.867351,-5.273437),
          zoom: 1,
          disableDefaultUI: true,
          disableDoubleClickZoom: true,
          draggable: false,
          keyboardShortcuts: false,
          minZoom:1,
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
    		 
  		});
}
     
google.maps.event.addDomListener(window, 'load', initialize);
    
    


// 

