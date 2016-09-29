var start_maps={lat: 59.9334832, lng: 30.3359137};

(function() {
  'use strict';
  if($('#maps').length>0){
/*  map.setOptions({ minZoom: 7, maxZoom: 25 });
    map.setZoom(8)*/
    var map_src="http://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=false&language=ru-RU&region=uk&libraries=places"
    map_src+="&key=AIzaSyDaQ9tBdRls8QW7NERlhxUMgk5J5TeHKdo"
    map_src+="&callback=mapInit"
    loadScript(map_src)
  }
  $('.circle').pieChart({
    barColor: '#004cd1',
    trackColor: '#dfdcd5',
    lineCap: 'butt',
    lineWidth: 20,
    size: 110,
    onStep: function (from, to, percent) {
      $(this.element).find('canvas').css('opacity',percent/100)
    }
  });
  $(".page_scrolle-down").click(function (event) {
    event.preventDefault();
    $('body,html').animate({scrollTop: window.innerHeight}, 1500);
  });
  $(".page_scrolle-up").click(function (event) {
    event.preventDefault();
    $('body,html').animate({scrollTop:0}, 1500);
  });
})();

function loadScript(url){
  var e = document.createElement("script");
  e.src = url;
  e.type="text/javascript";
  document.getElementsByTagName("head")[0].appendChild(e);
}
function mapInit() {
  var styles = [
    {
      "featureType": "administrative",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#4f4f4e"
        }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [
        {
          "color": "#f2f2f2"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "all",
      "stylers": [
        {
          "saturation": -100
        },
        {
          "lightness": 45
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
        {
          "color": "#4369aa"
        },
        {
          "visibility": "on"
        }
      ]
    }
  ];
  var styledMap = new google.maps.StyledMapType(styles,
      {name: "Styled Map"});
  var mapOptions = {
    zoom: 11,
    center: new google.maps.LatLng(47.100566, 37.5376353),
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    },
    disableDefaultUI: true,
    zoomControl:false,
    scaleControl:false,
    scrollwheel:false
  };
  var map = new google.maps.Map(document.getElementById('maps'),
      mapOptions);
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');
}