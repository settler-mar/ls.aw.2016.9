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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBzdGFydF9tYXBzPXtsYXQ6IDU5LjkzMzQ4MzIsIGxuZzogMzAuMzM1OTEzN307XG5cbihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICBpZigkKCcjbWFwcycpLmxlbmd0aD4wKXtcbi8qICBtYXAuc2V0T3B0aW9ucyh7IG1pblpvb206IDcsIG1heFpvb206IDI1IH0pO1xuICAgIG1hcC5zZXRab29tKDgpKi9cbiAgICB2YXIgbWFwX3NyYz1cImh0dHA6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzP3Y9My5leHAmc2lnbmVkX2luPWZhbHNlJmxhbmd1YWdlPXJ1LVJVJnJlZ2lvbj11ayZsaWJyYXJpZXM9cGxhY2VzXCJcbiAgICBtYXBfc3JjKz1cIiZrZXk9QUl6YVN5RGFROXRCZFJsczhRVzdORVJsaHhVTWdrNUo1VGVIS2RvXCJcbiAgICBtYXBfc3JjKz1cIiZjYWxsYmFjaz1tYXBJbml0XCJcbiAgICBsb2FkU2NyaXB0KG1hcF9zcmMpXG4gIH1cbiAgJCgnLmNpcmNsZScpLnBpZUNoYXJ0KHtcbiAgICBiYXJDb2xvcjogJyMwMDRjZDEnLFxuICAgIHRyYWNrQ29sb3I6ICcjZGZkY2Q1JyxcbiAgICBsaW5lQ2FwOiAnYnV0dCcsXG4gICAgbGluZVdpZHRoOiAyMCxcbiAgICBzaXplOiAxMTAsXG4gICAgb25TdGVwOiBmdW5jdGlvbiAoZnJvbSwgdG8sIHBlcmNlbnQpIHtcbiAgICAgICQodGhpcy5lbGVtZW50KS5maW5kKCdjYW52YXMnKS5jc3MoJ29wYWNpdHknLHBlcmNlbnQvMTAwKVxuICAgIH1cbiAgfSk7XG4gICQoXCIucGFnZV9zY3JvbGxlLWRvd25cIikuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtzY3JvbGxUb3A6IHdpbmRvdy5pbm5lckhlaWdodH0sIDE1MDApO1xuICB9KTtcbiAgJChcIi5wYWdlX3Njcm9sbGUtdXBcIikuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtzY3JvbGxUb3A6MH0sIDE1MDApO1xuICB9KTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGxvYWRTY3JpcHQodXJsKXtcbiAgdmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICBlLnNyYyA9IHVybDtcbiAgZS50eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXS5hcHBlbmRDaGlsZChlKTtcbn1cbmZ1bmN0aW9uIG1hcEluaXQoKSB7XG4gIHZhciBzdHlsZXMgPSBbXG4gICAge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiY29sb3JcIjogXCIjNGY0ZjRlXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImxhbmRzY2FwZVwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiY29sb3JcIjogXCIjZjJmMmYyXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaVwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXG4gICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJzYXR1cmF0aW9uXCI6IC0xMDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibGlnaHRuZXNzXCI6IDQ1XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJzaW1wbGlmaWVkXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuYXJ0ZXJpYWxcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMuaWNvblwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ0cmFuc2l0XCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXG4gICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXG4gICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIiM0MzY5YWFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib25cIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdO1xuICB2YXIgc3R5bGVkTWFwID0gbmV3IGdvb2dsZS5tYXBzLlN0eWxlZE1hcFR5cGUoc3R5bGVzLFxuICAgICAge25hbWU6IFwiU3R5bGVkIE1hcFwifSk7XG4gIHZhciBtYXBPcHRpb25zID0ge1xuICAgIHpvb206IDExLFxuICAgIGNlbnRlcjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyg0Ny4xMDA1NjYsIDM3LjUzNzYzNTMpLFxuICAgIG1hcFR5cGVDb250cm9sT3B0aW9uczoge1xuICAgICAgbWFwVHlwZUlkczogW2dvb2dsZS5tYXBzLk1hcFR5cGVJZC5ST0FETUFQLCAnbWFwX3N0eWxlJ11cbiAgICB9LFxuICAgIGRpc2FibGVEZWZhdWx0VUk6IHRydWUsXG4gICAgem9vbUNvbnRyb2w6ZmFsc2UsXG4gICAgc2NhbGVDb250cm9sOmZhbHNlLFxuICAgIHNjcm9sbHdoZWVsOmZhbHNlXG4gIH07XG4gIHZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXBzJyksXG4gICAgICBtYXBPcHRpb25zKTtcbiAgbWFwLm1hcFR5cGVzLnNldCgnbWFwX3N0eWxlJywgc3R5bGVkTWFwKTtcbiAgbWFwLnNldE1hcFR5cGVJZCgnbWFwX3N0eWxlJyk7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
