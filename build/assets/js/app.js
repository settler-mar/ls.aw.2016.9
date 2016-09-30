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

// Cache selectors
var lastId,
    topMenu = $(".content_blog__list"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 300);
    e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
    // Get container scroll position
    var fromTop = $(this).scrollTop()+topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function(){
        if ($(this).offset().top < fromTop)
            return this;
    });
    // Get the id of the current element
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems.removeClass("content_blog__link_active")
        menuItems.filter("[href='#"+id+"']").addClass("content_blog__link_active");
    }
});
(function() {
    $('.content_blog__list').sticky({topSpacing:0});
})();
(function() {
    'use strict';
    if ($('.paralax-control').length > 0) {
        if(navigator.userAgent.match(/iPhone|iPad|iPod|Android|BlackBerry|IEMobile/i)) {
            //для мобильных устройств не грузить пралакс и видео
        } else{
            $('.paralax').parallax();
            var BV = new $.BigVideo({container: $('.block-video-bg'), useFlashForFirefox:false});
            BV.init();
            if (!!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0) {
                BV.show('/assets/video/night.ogv', {doLoop: true, ambient: false});
            } else {
                BV.show('/assets/video/night.mp4', {
                    doLoop: true,
                    ambient: false,
                    altSource: '/assets/video/night.ogv'
                });
            }
            $('#big-video-wrap video').fadeOut(0);
            BV.getPlayer().on('loadedmetadata', function(){
                $('#big-video-wrap video').fadeIn('slow');
            });
        }
    }
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm1hcC5qcyIsIm1lbnUuanMiLCJqcXVlcnkubmV4dF9pdGVtX2FuaW1hdGlvbi5qcyIsImFjdGl2ZS5tZW51Lml0ZW0uanMiLCJzY3JvbGxfYmxvY2tfbWVudS5qcyIsImJnX2FuaW1hdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQ0E7QUFDQTtBQUNBO0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG4gICQoJy5jaXJjbGUnKS5waWVDaGFydCh7XG4gICAgYmFyQ29sb3I6ICcjMDA0Y2QxJyxcbiAgICB0cmFja0NvbG9yOiAnI2RmZGNkNScsXG4gICAgbGluZUNhcDogJ2J1dHQnLFxuICAgIGxpbmVXaWR0aDogMjAsXG4gICAgc2l6ZTogMTEwLFxuICAgIG9uU3RlcDogZnVuY3Rpb24gKGZyb20sIHRvLCBwZXJjZW50KSB7XG4gICAgICAkKHRoaXMuZWxlbWVudCkuZmluZCgnY2FudmFzJykuY3NzKCdvcGFjaXR5JyxwZXJjZW50LzEwMClcbiAgICB9XG4gIH0pO1xuICAkKFwiLnBhZ2Vfc2Nyb2xsZS1kb3duXCIpLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiB3aW5kb3cuaW5uZXJIZWlnaHR9LCAxNTAwKTtcbiAgfSk7XG4gICQoXCIucGFnZV9zY3JvbGxlLXVwXCIpLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAwfSwgMTUwMCk7XG4gIH0pXG59KSgpO1xuXG5mdW5jdGlvbiBsb2FkU2NyaXB0KHVybCl7XG4gIHZhciBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgZS5zcmMgPSB1cmw7XG4gIGUudHlwZT1cInRleHQvamF2YXNjcmlwdFwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQoZSk7XG59XG4iLCIoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIGlmICgkKCcjbWFwcycpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLyogIG1hcC5zZXRPcHRpb25zKHsgbWluWm9vbTogNywgbWF4Wm9vbTogMjUgfSk7XG4gICAgICAgICBtYXAuc2V0Wm9vbSg4KSovXG4gICAgICAgIHZhciBtYXBfc3JjID0gXCJodHRwOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz92PTMuZXhwJnNpZ25lZF9pbj1mYWxzZSZsYW5ndWFnZT1ydS1SVSZyZWdpb249dWsmbGlicmFyaWVzPXBsYWNlc1wiXG4gICAgICAgIG1hcF9zcmMgKz0gXCIma2V5PUFJemFTeURhUTl0QmRSbHM4UVc3TkVSbGh4VU1nazVKNVRlSEtkb1wiXG4gICAgICAgIG1hcF9zcmMgKz0gXCImY2FsbGJhY2s9bWFwSW5pdFwiXG4gICAgICAgIGxvYWRTY3JpcHQobWFwX3NyYylcbiAgICB9XG59KSgpXG5mdW5jdGlvbiBtYXBJbml0KCkge1xuICAgIHZhciBzdHlsZXMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZVwiLFxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzRmNGY0ZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwibGFuZHNjYXBlXCIsXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXG4gICAgICAgICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNmMmYyZjJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaVwiLFxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwic2F0dXJhdGlvblwiOiAtMTAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwibGlnaHRuZXNzXCI6IDQ1XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5XCIsXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXG4gICAgICAgICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwic2ltcGxpZmllZFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5hcnRlcmlhbFwiLFxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy5pY29uXCIsXG4gICAgICAgICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ0cmFuc2l0XCIsXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXG4gICAgICAgICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjNDM2OWFhXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib25cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIF07XG4gICAgdmFyIHN0eWxlZE1hcCA9IG5ldyBnb29nbGUubWFwcy5TdHlsZWRNYXBUeXBlKHN0eWxlcyxcbiAgICAgICAge25hbWU6IFwiU3R5bGVkIE1hcFwifSk7XG4gICAgdmFyIG1hcE9wdGlvbnMgPSB7XG4gICAgICAgIHpvb206IDExLFxuICAgICAgICBjZW50ZXI6IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoNDcuMTAwNTY2LCAzNy41Mzc2MzUzKSxcbiAgICAgICAgbWFwVHlwZUNvbnRyb2xPcHRpb25zOiB7XG4gICAgICAgICAgICBtYXBUeXBlSWRzOiBbZ29vZ2xlLm1hcHMuTWFwVHlwZUlkLlJPQURNQVAsICdtYXBfc3R5bGUnXVxuICAgICAgICB9LFxuICAgICAgICBkaXNhYmxlRGVmYXVsdFVJOiB0cnVlLFxuICAgICAgICB6b29tQ29udHJvbDpmYWxzZSxcbiAgICAgICAgc2NhbGVDb250cm9sOmZhbHNlLFxuICAgICAgICBzY3JvbGx3aGVlbDpmYWxzZVxuICAgIH07XG4gICAgdmFyIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcHMnKSxcbiAgICAgICAgbWFwT3B0aW9ucyk7XG4gICAgbWFwLm1hcFR5cGVzLnNldCgnbWFwX3N0eWxlJywgc3R5bGVkTWFwKTtcbiAgICBtYXAuc2V0TWFwVHlwZUlkKCdtYXBfc3R5bGUnKTtcbn0vKipcbiAqIENyZWF0ZWQgYnkgbWF4IG9uIDI5LjA5LjE2LlxuICovXG4iLCJ2YXIgYW5pbWF0aW9uRW5kID0gJ3dlYmtpdEFuaW1hdGlvbkVuZCBtb3pBbmltYXRpb25FbmQgTVNBbmltYXRpb25FbmQgb2FuaW1hdGlvbmVuZCBhbmltYXRpb25lbmQnO1xuKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgICQoJy5oZWFkZXItbWVudScpLm9uKGFuaW1hdGlvbkVuZCwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKCEkKHRoaXMpLmhhc0NsYXNzKCdhbmltYXRpb25fc2hpcm1hJykgJiYgZXZlbnQuYW5pbWF0aW9uTmFtZT09J2FuaW1hdGlvbl9mYWRlT3V0Jykge1xuICAgICAgICAgICAgJCgnLmhlYWRlci1tZW51JykucmVtb3ZlQ2xhc3MoJ2hlYWRlci1tZW51X2FjdGl2ZScpO1xuICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdoaWRlX3Njcm9sbCcpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcuaGVhZGVyLW1lbnUtYnV0dG9uJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnaGVhZGVyLW1lbnUtYnV0dG9uX2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdoZWFkZXItbWVudS1idXR0b25fYWN0aXZlJyk7XG4gICAgICAgICAgICAkKCcuaGVhZGVyLW1lbnUnKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnYW5pbWF0aW9uX2ZhZGVPdXQnKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnYW5pbWF0aW9uX3NoaXJtYScpO1xuICAgICAgICAgICAgJCgnLmhlYWRlci1tZW51X19pdGVtJykubmV4dF9pdGVtX2FuaW1hdGlvbih7YW5pbWF0aW9uX2NsYXNzOidpdGVtLWhpZGUnLHByZXdfY2xhc3M6J2l0ZW0tc2hvdyd9KVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2hlYWRlci1tZW51LWJ1dHRvbl9hY3RpdmUnKTtcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaGlkZV9zY3JvbGwnKTtcbiAgICAgICAgICAgICQoJy5oZWFkZXItbWVudScpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdhbmltYXRpb25fZmFkZU91dCcpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdoZWFkZXItbWVudV9hY3RpdmUnKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnYW5pbWF0aW9uX3NoaXJtYScpO1xuICAgICAgICAgICAgJCgnLmhlYWRlci1tZW51X19pdGVtJylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2l0ZW0taGlkZScpXG4gICAgICAgICAgICAgICAgLm5leHRfaXRlbV9hbmltYXRpb24oe2FuaW1hdGlvbl9jbGFzczonaXRlbS1zaG93J30pXG4gICAgICAgIH1cbiAgICB9KVxufSkoKTsiLCI7KGZ1bmN0aW9uKCQpe1xuXHR2YXIgdGltZXJfaWQgPSBmYWxzZTtcblx0dmFyIGFuaW1hdGVfZWxlbWVudCxjb25maWc7XG5cdHZhciB0X2VsO1xuXHR2YXIgZGVmYXVsdHM9e1xuXHRcdGFuaW1hdGlvbl9jbGFzczp1bmRlZmluZWQsXG5cdFx0cHJld19jbGFzczp1bmRlZmluZWQsXG5cdFx0dGltZV9pbnRlcnZhbDoxMDBcblx0fTtcblx0XG5cdGZ1bmN0aW9uIG5leHRfaXRlbV9hbmltYXRpb24oZWxlbWVudCxvcHRpb25zKXtcblx0XHRhbmltYXRlX2VsZW1lbnQ9JChlbGVtZW50KVxuXHRcdGNvbmZpZz0kLmV4dGVuZCh7fSxkZWZhdWx0cyxvcHRpb25zKTtcblx0XHRpZihjb25maWcuYW5pbWF0aW9uX2NsYXNzPT11bmRlZmluZWQpe1xuXHRcdFx0Y29uc29sZS5lcnJvcignUGFyYW1ldHIgYW5pbWF0aW9uX2NsYXNzIG5vdCBmb3VuZCcpXG5cdFx0fVxuXHRcdHRoaXMuaW5pdCgpO1x0XG5cdH1cblx0bmV4dF9pdGVtX2FuaW1hdGlvbi5wcm90b3R5cGUuYW5pbWF0aW9uX3N0YXJ0PWZ1bmN0aW9uKCl7XG5cdFx0dF9lbCA9IGFuaW1hdGVfZWxlbWVudC5ub3QoJy4nICsgY29uZmlnLmFuaW1hdGlvbl9jbGFzcykuZmlyc3QoKTtcblx0XHRpZiAodF9lbC5sZW5ndGggPiAwKSB7XG5cdFx0XHR0X2VsLmFkZENsYXNzKGNvbmZpZy5hbmltYXRpb25fY2xhc3MpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbGVhckludGVydmFsKHRpbWVyX2lkKTtcblx0XHR9XG5cdFx0aWYoY29uZmlnLnByZXdfY2xhc3MhPXVuZGVmaW5lZCl0X2VsLnJlbW92ZUNsYXNzKGNvbmZpZy5wcmV3X2NsYXNzKVxuXHR9XG5cblx0bmV4dF9pdGVtX2FuaW1hdGlvbi5wcm90b3R5cGUuaW5pdD1mdW5jdGlvbigpe1xuXHRcdGFuaW1hdGVfZWxlbWVudC5yZW1vdmVDbGFzcyhjb25maWcuYW5pbWF0aW9uX2NsYXNzKTtcblx0XHR0aW1lcl9pZD1zZXRJbnRlcnZhbCh0aGlzLmFuaW1hdGlvbl9zdGFydCxjb25maWcudGltZV9pbnRlcnZhbCk7XG5cdH07XG5cdFxuXHQkLmZuLm5leHRfaXRlbV9hbmltYXRpb249ZnVuY3Rpb24ob3B0aW9ucyl7XG5cdFx0bmV3IG5leHRfaXRlbV9hbmltYXRpb24odGhpcyxvcHRpb25zKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufSkoalF1ZXJ5KTtcbiIsIi8vIENhY2hlIHNlbGVjdG9yc1xudmFyIGxhc3RJZCxcbiAgICB0b3BNZW51ID0gJChcIi5jb250ZW50X2Jsb2dfX2xpc3RcIiksXG4gICAgdG9wTWVudUhlaWdodCA9IHRvcE1lbnUub3V0ZXJIZWlnaHQoKSsxNSxcbiAgICAvLyBBbGwgbGlzdCBpdGVtc1xuICAgIG1lbnVJdGVtcyA9IHRvcE1lbnUuZmluZChcImFcIiksXG4gICAgLy8gQW5jaG9ycyBjb3JyZXNwb25kaW5nIHRvIG1lbnUgaXRlbXNcbiAgICBzY3JvbGxJdGVtcyA9IG1lbnVJdGVtcy5tYXAoZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIGl0ZW0gPSAkKCQodGhpcykuYXR0cihcImhyZWZcIikpO1xuICAgICAgICBpZiAoaXRlbS5sZW5ndGgpIHsgcmV0dXJuIGl0ZW07IH1cbiAgICB9KTtcblxuLy8gQmluZCBjbGljayBoYW5kbGVyIHRvIG1lbnUgaXRlbXNcbi8vIHNvIHdlIGNhbiBnZXQgYSBmYW5jeSBzY3JvbGwgYW5pbWF0aW9uXG5tZW51SXRlbXMuY2xpY2soZnVuY3Rpb24oZSl7XG4gICAgdmFyIGhyZWYgPSAkKHRoaXMpLmF0dHIoXCJocmVmXCIpLFxuICAgICAgICBvZmZzZXRUb3AgPSBocmVmID09PSBcIiNcIiA/IDAgOiAkKGhyZWYpLm9mZnNldCgpLnRvcC10b3BNZW51SGVpZ2h0KzE7XG4gICAgJCgnaHRtbCwgYm9keScpLnN0b3AoKS5hbmltYXRlKHtcbiAgICAgICAgc2Nyb2xsVG9wOiBvZmZzZXRUb3BcbiAgICB9LCAzMDApO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG4vLyBCaW5kIHRvIHNjcm9sbFxuJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xuICAgIC8vIEdldCBjb250YWluZXIgc2Nyb2xsIHBvc2l0aW9uXG4gICAgdmFyIGZyb21Ub3AgPSAkKHRoaXMpLnNjcm9sbFRvcCgpK3RvcE1lbnVIZWlnaHQ7XG5cbiAgICAvLyBHZXQgaWQgb2YgY3VycmVudCBzY3JvbGwgaXRlbVxuICAgIHZhciBjdXIgPSBzY3JvbGxJdGVtcy5tYXAoZnVuY3Rpb24oKXtcbiAgICAgICAgaWYgKCQodGhpcykub2Zmc2V0KCkudG9wIDwgZnJvbVRvcClcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0pO1xuICAgIC8vIEdldCB0aGUgaWQgb2YgdGhlIGN1cnJlbnQgZWxlbWVudFxuICAgIGN1ciA9IGN1cltjdXIubGVuZ3RoLTFdO1xuICAgIHZhciBpZCA9IGN1ciAmJiBjdXIubGVuZ3RoID8gY3VyWzBdLmlkIDogXCJcIjtcblxuICAgIGlmIChsYXN0SWQgIT09IGlkKSB7XG4gICAgICAgIGxhc3RJZCA9IGlkO1xuICAgICAgICAvLyBTZXQvcmVtb3ZlIGFjdGl2ZSBjbGFzc1xuICAgICAgICBtZW51SXRlbXMucmVtb3ZlQ2xhc3MoXCJjb250ZW50X2Jsb2dfX2xpbmtfYWN0aXZlXCIpXG4gICAgICAgIG1lbnVJdGVtcy5maWx0ZXIoXCJbaHJlZj0nI1wiK2lkK1wiJ11cIikuYWRkQ2xhc3MoXCJjb250ZW50X2Jsb2dfX2xpbmtfYWN0aXZlXCIpO1xuICAgIH1cbn0pOyIsIihmdW5jdGlvbigpIHtcbiAgICAkKCcuY29udGVudF9ibG9nX19saXN0Jykuc3RpY2t5KHt0b3BTcGFjaW5nOjB9KTtcbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICBpZiAoJCgnLnBhcmFsYXgtY29udHJvbCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBob25lfGlQYWR8aVBvZHxBbmRyb2lkfEJsYWNrQmVycnl8SUVNb2JpbGUvaSkpIHtcbiAgICAgICAgICAgIC8v0LTQu9GPINC80L7QsdC40LvRjNC90YvRhSDRg9GB0YLRgNC+0LnRgdGC0LIg0L3QtSDQs9GA0YPQt9C40YLRjCDQv9GA0LDQu9Cw0LrRgSDQuCDQstC40LTQtdC+XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICQoJy5wYXJhbGF4JykucGFyYWxsYXgoKTtcbiAgICAgICAgICAgIHZhciBCViA9IG5ldyAkLkJpZ1ZpZGVvKHtjb250YWluZXI6ICQoJy5ibG9jay12aWRlby1iZycpLCB1c2VGbGFzaEZvckZpcmVmb3g6ZmFsc2V9KTtcbiAgICAgICAgICAgIEJWLmluaXQoKTtcbiAgICAgICAgICAgIGlmICghIXdpbmRvdy5vcGVyYSB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJyBPUFIvJykgPj0gMCkge1xuICAgICAgICAgICAgICAgIEJWLnNob3coJy9hc3NldHMvdmlkZW8vbmlnaHQub2d2Jywge2RvTG9vcDogdHJ1ZSwgYW1iaWVudDogZmFsc2V9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgQlYuc2hvdygnL2Fzc2V0cy92aWRlby9uaWdodC5tcDQnLCB7XG4gICAgICAgICAgICAgICAgICAgIGRvTG9vcDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYW1iaWVudDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGFsdFNvdXJjZTogJy9hc3NldHMvdmlkZW8vbmlnaHQub2d2J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJCgnI2JpZy12aWRlby13cmFwIHZpZGVvJykuZmFkZU91dCgwKTtcbiAgICAgICAgICAgIEJWLmdldFBsYXllcigpLm9uKCdsb2FkZWRtZXRhZGF0YScsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgJCgnI2JpZy12aWRlby13cmFwIHZpZGVvJykuZmFkZUluKCdzbG93Jyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
