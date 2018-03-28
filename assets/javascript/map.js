// GLOBAL VARIABLES
//----------------------------------------------------------------------
// var map;
var marker;
var mapLocation;
// MAIN PROCESS
//---------------------------------------------------------------------
// function initMap() {
//     var mapLocation = {lat: -25.363, lng: 131.044};
//     var map = new google.maps.Map(document.getElementById('map'), {
//       zoom: 4,
//       center: mapLocation
//     });
//     var marker = new google.maps.Marker({
//       position: mapLocation,
//       map: map
//     });
//   }
//Reference at:  https://developers.google.com/maps/documentation/javascript/geocoding#GeocodingRequests
  var geocoder;
  var map;
  var address = "1890 Buford Ave, St Paul, MN 55108";
  function initialize(address) 
  {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(-34.397, 150.644);
    var mapOptions = {
      zoom: 12,
      center: latlng,
      gestureHandling: 'greedy'
    }
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    
    buildMap (address);
}
// var markerIcon = {
//   path: assets/images/dog-icon.png,
//   // scaledSize: new google.maps.Size(80, 80),
//   origin: new google.maps.Point(100,100),
//   anchor: new google.maps.Point(1132,1165),
//   labelOrigin: new google.maps.Point(1480,1566)
// };
// FUNCTIONS
// --------------------------------------------------------------------------
  function buildMap (address) {
    // var address = document.getElementById('address').value;
  
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == 'OK') {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
            // icon: "assets/images/dog-icon.png",
            icon: {
              labelOrigin: new google.maps.Point(20, 50),
              url: 'assets/images/dog-icon.png',
              size: new google.maps.Size(40, 40),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(0, 0),
            },
            animation: google.maps.Animation.DROP,
            // reference:  https://developers.google.com/maps/documentation/javascript/examples/marker-animations
            // title: 'Name of Shelter',
            labelOrigin: (0,100),
            label: {
              color: 'red',
              fontWeight: 'bold',
              text: 'Find me here',
            },
            // label: 'Extra Extra Extra Extra Extra Loooooong Name'
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }


