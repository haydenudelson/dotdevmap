var westcampus = [{'name':'Google West Campus 1','lat':41.86,'lng':-87.7}]

function myMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 11,
		center: {lat: 41.8781, lng: -87.6298},
	});

	for (x in testing) {
		var building = testing[x];
		var location = new google.maps.LatLng(building.lat,building.lng);
		var marker = new google.maps.Marker({
			position: location,
			title: "Crime",
			map: map
		});
	}
}
google.maps.event.addDomListener(window, 'load', myMap);
