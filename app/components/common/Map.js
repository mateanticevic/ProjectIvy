var gmaps = require('google-maps-api')('AIzaSyC2Xp07hffemgAHYenBMKxeAeJ017nIbbk');

            var mapOptions = {
                zoom: 13,
                center: {lat: -34.397, lng: 150.644},
                mapTypeControl: false,
                streetViewControl: false,
                zoomControl: false
            };

var map = {};

var Map = React.createClass({

	  componentDidMount: function() {
        gmaps().then( function(mp) {
            map = new google.maps.Map(document.getElementById('mapp'), mapOptions);
        });
	  },
      componentDidUpdate: function(prevProps, prevState){
          
          if(typeof google != 'object' || typeof google.maps != 'object'){
              return;
          }

          if(this.props.location != undefined && map.setCenter != undefined){
              map.setCenter(new google.maps.LatLng(this.props.location.latitude, this.props.location.longitude));
          }

        var flightPath = new google.maps.Polyline({
          path: this.props.route,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 4
        });

        flightPath.setMap(map);          
      },      
	  getInitialState: function() {
		return {
            map: {}
        };
	  },
      render: function () {
        return (
			<div id="mapp" style={{height: '600px'}} ref={(x) => this.mapDiv = x}>
            x
            </div>
        )
      }
  });  
   
module.exports = Map;