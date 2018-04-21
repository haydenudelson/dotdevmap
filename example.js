var myLatLng = [{lat: 41.8781, lng: -87.6298},
				{lat: 41.932, lng: -87.243},
				{lat: 42.00, lng: -87.5},
				{lat: 41.89, lng: -87.5}]



function myMap() {
  var mapCenter = new google.maps.LatLng(41.8781,-87.6298);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: mapCenter, zoom: 11};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  //map.data.loadGeoJson('crimespastyear.json')
  map.data.loadGeoJson('https://storage.googleapis.com/mapsdevsite/json/google.json');
  for (i = 0; i <= myLatLng.length; i++) {
  	plotPoint(map, myLatLng[i]);
  }
}

function plotData() {
	var data;

	Papa.parse('File:///D:/Hayden/Files/Northwestern/dot dev/formatteddata.csv', {
		header: true,
		download: true,

		complete: function(results) {
			console.log(results);
			data = results.data;
  }
});
	var element = document.getElementById("test");
	element.innerHTML = data;
}

function plotPoint(map, data) {
	var marker = new google.maps.Marker({
		position: data,
		map: map
	})
}

plotData()
