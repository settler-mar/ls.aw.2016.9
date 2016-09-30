(function() {
  'use strict';
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
    $('body,html').animate({scrollTop: 0}, 1500);
  })
})();

function loadScript(url){
  var e = document.createElement("script");
  e.src = url;
  e.type="text/javascript";
  document.getElementsByTagName("head")[0].appendChild(e);
}

(function() {
    'use strict';
    if ($('#maps').length > 0) {
        /*  map.setOptions({ minZoom: 7, maxZoom: 25 });
         map.setZoom(8)*/
        var map_src = "http://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=false&language=ru-RU&region=uk&libraries=places"
        map_src += "&key=AIzaSyDaQ9tBdRls8QW7NERlhxUMgk5J5TeHKdo"
        map_src += "&callback=mapInit"
        loadScript(map_src)
    }
})()
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
}/**
 * Created by max on 29.09.16.
 */

var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
(function() {
    'use strict';

    $('.header-menu').on(animationEnd, function() {
        if(!$(this).hasClass('animation_shirma') && event.animationName=='animation_fadeOut') {
            $('.header-menu').removeClass('header-menu_active');
            $('body').removeClass('hide_scroll');
        }
    });

    $('.header-menu-button').click(function(){
        if($(this).hasClass('header-menu-button_active')) {
            $(this).removeClass('header-menu-button_active');
            $('.header-menu')
                .addClass('animation_fadeOut')
                .removeClass('animation_shirma');
            $('.header-menu__item').next_item_animation({animation_class:'item-hide',prew_class:'item-show'})
        }else{
            $(this).addClass('header-menu-button_active');
            $('body').addClass('hide_scroll');
            $('.header-menu')
                .removeClass('animation_fadeOut')
                .addClass('header-menu_active')
                .addClass('animation_shirma');
            $('.header-menu__item')
                .removeClass('item-hide')
                .next_item_animation({animation_class:'item-show'})
        }
    })
})();
;(function($){
	var timer_id = false;
	var animate_element,config;
	var t_el;
	var defaults={
		animation_class:undefined,
		prew_class:undefined,
		time_interval:100
	};
	
	function next_item_animation(element,options){
		animate_element=$(element)
		config=$.extend({},defaults,options);
		if(config.animation_class==undefined){
			console.error('Parametr animation_class not found')
		}
		this.init();	
	}
	next_item_animation.prototype.animation_start=function(){
		t_el = animate_element.not('.' + config.animation_class).first();
		if (t_el.length > 0) {
			t_el.addClass(config.animation_class);
		} else {
			clearInterval(timer_id);
		}
		if(config.prew_class!=undefined)t_el.removeClass(config.prew_class)
	}

	next_item_animation.prototype.init=function(){
		animate_element.removeClass(config.animation_class);
		timer_id=setInterval(this.animation_start,config.time_interval);
	};
	
	$.fn.next_item_animation=function(options){
		new next_item_animation(this,options);
		return this;
	}
})(jQuery);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm1hcC5qcyIsIm1lbnUuanMiLCJqcXVlcnkubmV4dF9pdGVtX2FuaW1hdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICAkKCcuY2lyY2xlJykucGllQ2hhcnQoe1xuICAgIGJhckNvbG9yOiAnIzAwNGNkMScsXG4gICAgdHJhY2tDb2xvcjogJyNkZmRjZDUnLFxuICAgIGxpbmVDYXA6ICdidXR0JyxcbiAgICBsaW5lV2lkdGg6IDIwLFxuICAgIHNpemU6IDExMCxcbiAgICBvblN0ZXA6IGZ1bmN0aW9uIChmcm9tLCB0bywgcGVyY2VudCkge1xuICAgICAgJCh0aGlzLmVsZW1lbnQpLmZpbmQoJ2NhbnZhcycpLmNzcygnb3BhY2l0eScscGVyY2VudC8xMDApXG4gICAgfVxuICB9KTtcbiAgJChcIi5wYWdlX3Njcm9sbGUtZG93blwiKS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe3Njcm9sbFRvcDogd2luZG93LmlubmVySGVpZ2h0fSwgMTUwMCk7XG4gIH0pO1xuICAkKFwiLnBhZ2Vfc2Nyb2xsZS11cFwiKS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe3Njcm9sbFRvcDogMH0sIDE1MDApO1xuICB9KVxufSkoKTtcblxuZnVuY3Rpb24gbG9hZFNjcmlwdCh1cmwpe1xuICB2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gIGUuc3JjID0gdXJsO1xuICBlLnR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKGUpO1xufVxuIiwiKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICBpZiAoJCgnI21hcHMnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8qICBtYXAuc2V0T3B0aW9ucyh7IG1pblpvb206IDcsIG1heFpvb206IDI1IH0pO1xuICAgICAgICAgbWFwLnNldFpvb20oOCkqL1xuICAgICAgICB2YXIgbWFwX3NyYyA9IFwiaHR0cDovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/dj0zLmV4cCZzaWduZWRfaW49ZmFsc2UmbGFuZ3VhZ2U9cnUtUlUmcmVnaW9uPXVrJmxpYnJhcmllcz1wbGFjZXNcIlxuICAgICAgICBtYXBfc3JjICs9IFwiJmtleT1BSXphU3lEYVE5dEJkUmxzOFFXN05FUmxoeFVNZ2s1SjVUZUhLZG9cIlxuICAgICAgICBtYXBfc3JjICs9IFwiJmNhbGxiYWNrPW1hcEluaXRcIlxuICAgICAgICBsb2FkU2NyaXB0KG1hcF9zcmMpXG4gICAgfVxufSkoKVxuZnVuY3Rpb24gbWFwSW5pdCgpIHtcbiAgICB2YXIgc3R5bGVzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmVcIixcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXG4gICAgICAgICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiM0ZjRmNGVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImxhbmRzY2FwZVwiLFxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjZjJmMmYyXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2lcIixcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIixcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInNhdHVyYXRpb25cIjogLTEwMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiA0NVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcInNpbXBsaWZpZWRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuYXJ0ZXJpYWxcIixcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMuaWNvblwiLFxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdFwiLFxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwid2F0ZXJcIixcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzQzNjlhYVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9uXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICBdO1xuICAgIHZhciBzdHlsZWRNYXAgPSBuZXcgZ29vZ2xlLm1hcHMuU3R5bGVkTWFwVHlwZShzdHlsZXMsXG4gICAgICAgIHtuYW1lOiBcIlN0eWxlZCBNYXBcIn0pO1xuICAgIHZhciBtYXBPcHRpb25zID0ge1xuICAgICAgICB6b29tOiAxMSxcbiAgICAgICAgY2VudGVyOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDQ3LjEwMDU2NiwgMzcuNTM3NjM1MyksXG4gICAgICAgIG1hcFR5cGVDb250cm9sT3B0aW9uczoge1xuICAgICAgICAgICAgbWFwVHlwZUlkczogW2dvb2dsZS5tYXBzLk1hcFR5cGVJZC5ST0FETUFQLCAnbWFwX3N0eWxlJ11cbiAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZURlZmF1bHRVSTogdHJ1ZSxcbiAgICAgICAgem9vbUNvbnRyb2w6ZmFsc2UsXG4gICAgICAgIHNjYWxlQ29udHJvbDpmYWxzZSxcbiAgICAgICAgc2Nyb2xsd2hlZWw6ZmFsc2VcbiAgICB9O1xuICAgIHZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXBzJyksXG4gICAgICAgIG1hcE9wdGlvbnMpO1xuICAgIG1hcC5tYXBUeXBlcy5zZXQoJ21hcF9zdHlsZScsIHN0eWxlZE1hcCk7XG4gICAgbWFwLnNldE1hcFR5cGVJZCgnbWFwX3N0eWxlJyk7XG59LyoqXG4gKiBDcmVhdGVkIGJ5IG1heCBvbiAyOS4wOS4xNi5cbiAqL1xuIiwidmFyIGFuaW1hdGlvbkVuZCA9ICd3ZWJraXRBbmltYXRpb25FbmQgbW96QW5pbWF0aW9uRW5kIE1TQW5pbWF0aW9uRW5kIG9hbmltYXRpb25lbmQgYW5pbWF0aW9uZW5kJztcbihmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICAkKCcuaGVhZGVyLW1lbnUnKS5vbihhbmltYXRpb25FbmQsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZighJCh0aGlzKS5oYXNDbGFzcygnYW5pbWF0aW9uX3NoaXJtYScpICYmIGV2ZW50LmFuaW1hdGlvbk5hbWU9PSdhbmltYXRpb25fZmFkZU91dCcpIHtcbiAgICAgICAgICAgICQoJy5oZWFkZXItbWVudScpLnJlbW92ZUNsYXNzKCdoZWFkZXItbWVudV9hY3RpdmUnKTtcbiAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaGlkZV9zY3JvbGwnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnLmhlYWRlci1tZW51LWJ1dHRvbicpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2hlYWRlci1tZW51LWJ1dHRvbl9hY3RpdmUnKSkge1xuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaGVhZGVyLW1lbnUtYnV0dG9uX2FjdGl2ZScpO1xuICAgICAgICAgICAgJCgnLmhlYWRlci1tZW51JylcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2FuaW1hdGlvbl9mYWRlT3V0JylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FuaW1hdGlvbl9zaGlybWEnKTtcbiAgICAgICAgICAgICQoJy5oZWFkZXItbWVudV9faXRlbScpLm5leHRfaXRlbV9hbmltYXRpb24oe2FuaW1hdGlvbl9jbGFzczonaXRlbS1oaWRlJyxwcmV3X2NsYXNzOidpdGVtLXNob3cnfSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdoZWFkZXItbWVudS1idXR0b25fYWN0aXZlJyk7XG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2hpZGVfc2Nyb2xsJyk7XG4gICAgICAgICAgICAkKCcuaGVhZGVyLW1lbnUnKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnYW5pbWF0aW9uX2ZhZGVPdXQnKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnaGVhZGVyLW1lbnVfYWN0aXZlJylcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2FuaW1hdGlvbl9zaGlybWEnKTtcbiAgICAgICAgICAgICQoJy5oZWFkZXItbWVudV9faXRlbScpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpdGVtLWhpZGUnKVxuICAgICAgICAgICAgICAgIC5uZXh0X2l0ZW1fYW5pbWF0aW9uKHthbmltYXRpb25fY2xhc3M6J2l0ZW0tc2hvdyd9KVxuICAgICAgICB9XG4gICAgfSlcbn0pKCk7IiwiOyhmdW5jdGlvbigkKXtcblx0dmFyIHRpbWVyX2lkID0gZmFsc2U7XG5cdHZhciBhbmltYXRlX2VsZW1lbnQsY29uZmlnO1xuXHR2YXIgdF9lbDtcblx0dmFyIGRlZmF1bHRzPXtcblx0XHRhbmltYXRpb25fY2xhc3M6dW5kZWZpbmVkLFxuXHRcdHByZXdfY2xhc3M6dW5kZWZpbmVkLFxuXHRcdHRpbWVfaW50ZXJ2YWw6MTAwXG5cdH07XG5cdFxuXHRmdW5jdGlvbiBuZXh0X2l0ZW1fYW5pbWF0aW9uKGVsZW1lbnQsb3B0aW9ucyl7XG5cdFx0YW5pbWF0ZV9lbGVtZW50PSQoZWxlbWVudClcblx0XHRjb25maWc9JC5leHRlbmQoe30sZGVmYXVsdHMsb3B0aW9ucyk7XG5cdFx0aWYoY29uZmlnLmFuaW1hdGlvbl9jbGFzcz09dW5kZWZpbmVkKXtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ1BhcmFtZXRyIGFuaW1hdGlvbl9jbGFzcyBub3QgZm91bmQnKVxuXHRcdH1cblx0XHR0aGlzLmluaXQoKTtcdFxuXHR9XG5cdG5leHRfaXRlbV9hbmltYXRpb24ucHJvdG90eXBlLmFuaW1hdGlvbl9zdGFydD1mdW5jdGlvbigpe1xuXHRcdHRfZWwgPSBhbmltYXRlX2VsZW1lbnQubm90KCcuJyArIGNvbmZpZy5hbmltYXRpb25fY2xhc3MpLmZpcnN0KCk7XG5cdFx0aWYgKHRfZWwubGVuZ3RoID4gMCkge1xuXHRcdFx0dF9lbC5hZGRDbGFzcyhjb25maWcuYW5pbWF0aW9uX2NsYXNzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2xlYXJJbnRlcnZhbCh0aW1lcl9pZCk7XG5cdFx0fVxuXHRcdGlmKGNvbmZpZy5wcmV3X2NsYXNzIT11bmRlZmluZWQpdF9lbC5yZW1vdmVDbGFzcyhjb25maWcucHJld19jbGFzcylcblx0fVxuXG5cdG5leHRfaXRlbV9hbmltYXRpb24ucHJvdG90eXBlLmluaXQ9ZnVuY3Rpb24oKXtcblx0XHRhbmltYXRlX2VsZW1lbnQucmVtb3ZlQ2xhc3MoY29uZmlnLmFuaW1hdGlvbl9jbGFzcyk7XG5cdFx0dGltZXJfaWQ9c2V0SW50ZXJ2YWwodGhpcy5hbmltYXRpb25fc3RhcnQsY29uZmlnLnRpbWVfaW50ZXJ2YWwpO1xuXHR9O1xuXHRcblx0JC5mbi5uZXh0X2l0ZW1fYW5pbWF0aW9uPWZ1bmN0aW9uKG9wdGlvbnMpe1xuXHRcdG5ldyBuZXh0X2l0ZW1fYW5pbWF0aW9uKHRoaXMsb3B0aW9ucyk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn0pKGpRdWVyeSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
