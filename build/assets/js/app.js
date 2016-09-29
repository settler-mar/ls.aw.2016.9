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
  $('.circle').each(function(){
    var el=$(this)
    el.circliful({
      animationStep: 5,
      foregroundBorderWidth: 30,
      backgroundBorderWidth: 30,
      percent: el.attr('percent'),
      replacePercentageByText:' ',
      foregroundColor:'#004cd1'
    });
  })
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
          "color": "#444444"
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
    center: new google.maps.LatLng(55.6468, 37.581),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgc3RhcnRfbWFwcz17bGF0OiA1OS45MzM0ODMyLCBsbmc6IDMwLjMzNTkxMzd9O1xuXG4oZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgaWYoJCgnI21hcHMnKS5sZW5ndGg+MCl7XG4vKiAgbWFwLnNldE9wdGlvbnMoeyBtaW5ab29tOiA3LCBtYXhab29tOiAyNSB9KTtcbiAgICBtYXAuc2V0Wm9vbSg4KSovXG4gICAgdmFyIG1hcF9zcmM9XCJodHRwOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz92PTMuZXhwJnNpZ25lZF9pbj1mYWxzZSZsYW5ndWFnZT1ydS1SVSZyZWdpb249dWsmbGlicmFyaWVzPXBsYWNlc1wiXG4gICAgbWFwX3NyYys9XCIma2V5PUFJemFTeURhUTl0QmRSbHM4UVc3TkVSbGh4VU1nazVKNVRlSEtkb1wiXG4gICAgbWFwX3NyYys9XCImY2FsbGJhY2s9bWFwSW5pdFwiXG4gICAgbG9hZFNjcmlwdChtYXBfc3JjKVxuICB9XG4gICQoJy5jaXJjbGUnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgdmFyIGVsPSQodGhpcylcbiAgICBlbC5jaXJjbGlmdWwoe1xuICAgICAgYW5pbWF0aW9uU3RlcDogNSxcbiAgICAgIGZvcmVncm91bmRCb3JkZXJXaWR0aDogMzAsXG4gICAgICBiYWNrZ3JvdW5kQm9yZGVyV2lkdGg6IDMwLFxuICAgICAgcGVyY2VudDogZWwuYXR0cigncGVyY2VudCcpLFxuICAgICAgcmVwbGFjZVBlcmNlbnRhZ2VCeVRleHQ6JyAnLFxuICAgICAgZm9yZWdyb3VuZENvbG9yOicjMDA0Y2QxJ1xuICAgIH0pO1xuICB9KVxufSkoKTtcblxuZnVuY3Rpb24gbG9hZFNjcmlwdCh1cmwpe1xuICB2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gIGUuc3JjID0gdXJsO1xuICBlLnR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKGUpO1xufVxuZnVuY3Rpb24gbWFwSW5pdCgpIHtcbiAgdmFyIHN0eWxlcyA9IFtcbiAgICB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmVcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXG4gICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIiM0NDQ0NDRcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwibGFuZHNjYXBlXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXG4gICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIiNmMmYyZjJcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXG4gICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInNhdHVyYXRpb25cIjogLTEwMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJsaWdodG5lc3NcIjogNDVcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcInNpbXBsaWZpZWRcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5hcnRlcmlhbFwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy5pY29uXCIsXG4gICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInRyYW5zaXRcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwid2F0ZXJcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiIzQzNjlhYVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvblwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF07XG4gIHZhciBzdHlsZWRNYXAgPSBuZXcgZ29vZ2xlLm1hcHMuU3R5bGVkTWFwVHlwZShzdHlsZXMsXG4gICAgICB7bmFtZTogXCJTdHlsZWQgTWFwXCJ9KTtcbiAgdmFyIG1hcE9wdGlvbnMgPSB7XG4gICAgem9vbTogMTEsXG4gICAgY2VudGVyOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDU1LjY0NjgsIDM3LjU4MSksXG4gICAgbWFwVHlwZUNvbnRyb2xPcHRpb25zOiB7XG4gICAgICBtYXBUeXBlSWRzOiBbZ29vZ2xlLm1hcHMuTWFwVHlwZUlkLlJPQURNQVAsICdtYXBfc3R5bGUnXVxuICAgIH0sXG4gICAgZGlzYWJsZURlZmF1bHRVSTogdHJ1ZSxcbiAgICB6b29tQ29udHJvbDpmYWxzZSxcbiAgICBzY2FsZUNvbnRyb2w6ZmFsc2UsXG4gICAgc2Nyb2xsd2hlZWw6ZmFsc2VcbiAgfTtcbiAgdmFyIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcHMnKSxcbiAgICAgIG1hcE9wdGlvbnMpO1xuICBtYXAubWFwVHlwZXMuc2V0KCdtYXBfc3R5bGUnLCBzdHlsZWRNYXApO1xuICBtYXAuc2V0TWFwVHlwZUlkKCdtYXBfc3R5bGUnKTtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
