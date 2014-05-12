$(document).ready(function(){

	$("#button-chevron-right").click(function (event){
	
			//alert("The paragraph was clicked.");

		
           // window.map.panTo(new google.maps.LatLng(38.739391, 47.059104));
            window.map.panBy(200,0);
			
	});


	$("#button-chevron-left").click(function (event){
	
			//alert("The paragraph was clicked.");

		
            window.map.panBy(-200,0);
			
	});

});

