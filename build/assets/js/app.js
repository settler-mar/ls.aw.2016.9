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
  });
  //$('.slider').settler_slider();
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

(function() {
    if($('.content-blog__menu').length>0){
        var top_pos_menu = $('.content-blog__menu').offset().top;
        $('.content-blog__menu a[href^=#]').click(function(){
            event.preventDefault(event);
            $('body,html').animate({scrollTop: $($(this).attr('href')).offset().top}, 500);
        });
        $(window).scroll(function () {
            scroll_value = window.pageYOffset;
            //отработка прилепания блока и упирания в подвал
            if (top_pos_menu < scroll_value) {
                if($('.footer').position().top<scroll_value+$('.content-blog__menu').height()){
                    $('.content-blog__menu')
                        .removeClass('content-blog__menu_fixed')
                        .addClass('content-blog__menu_to-down')
                }else{
                    $('.content-blog__menu')
                        .addClass('content-blog__menu_fixed')
                        .removeClass('content-blog__menu_to-down')
                }
            } else {
                $('.content-blog__menu').removeClass('content-blog__menu_fixed')
            }
            //отработка подсветки меню
            var link_list=$('.content-blog__menu a[href^=#]');
            for (var i=0;i<link_list.length;i++){
                var element_to_top=$($(link_list[i]).attr('href')).offset().top;
                if(scroll_value<element_to_top-100){
                    active_menu_item(link_list,i)
                    break;
                }
            }
            if(i==link_list.length)active_menu_item(link_list,i)
        });
    }
    function active_menu_item(link_list,i){
        link_list.removeClass('content-blog__link_active');
        if(i<1)i=1;
        $(link_list[i-1]).addClass('content-blog__link_active');
    }
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
;(function($){
	var defaults={
		url:undefined,
		here_tab_class:'slider__left-tab',
		controls_tab_class:'slider__rigth-tab',
		control_here_tab_class:'slider__here-slide',
		control_prev_tab_class:'slider__control slider__control-prev',
		control_prev_icon:'<i class="fa fa-chevron-down slider__button slider__button-prev"></i>',
		control_next_tab_class:'slider__control slider__control-next',
		control_next_icon:'<i class="fa fa-chevron-up slider__button slider__button-prev"></i>',
		here_img_class:'slider__here-slide__image',
		control_image_prev:'slider__control__image',
		control_image_next:'slider__control__image',

		full_slider_class:'slider__full-information',
		full_slider_title_class:'slider__title',
		skills_list_class:'slider__skills-list',
		skills_item_class:'slider__skills-item',
		slider_link_class:'slider__link',
		slider_link_icon:'<i class="fa fa-link slider__link-icon"></i>',
		slider_link_text_class:'slider__link-text',
		slider_link_text:'Перейти на сайт',
	};

	function settler_slider(element,options){
		this.slider=$(element);
		this.config=$.extend({},defaults,options);

		this.init();
	}

	settler_slider.prototype.init=function(){
		var slides_start=this.slider.find('ul.slider-home>li');

		var slider_here=$('<div/>',{
			class:this.config.here_tab_class
		});
		var controls_tab_class=$('<div/>',{
			class:this.config.controls_tab_class
		});
		var slider_control_here=$('<div/>', {
			class: this.config.control_here_tab_class
		});
		var control_prev_tab=$('<div/>', {
			class: this.config.control_prev_tab_class,
			html:this.config.control_prev_icon
		});
		var control_next_tab=$('<div/>', {
			class: this.config.control_next_tab_class,
			html:this.config.control_next_icon
		});

		for(var i=0;i<slides_start.length;i++){
			data=$(slides_start[i]);

			//создание блока полной информации
			var full_slider=$('<div/>',{
				class:this.config.full_slider_class
			});
			full_slider.append($('<div/>',{
				class:this.config.full_slider_title_class,
				text:data.find('.title').text()
			}));
			var skils=data.find('.skills').first().clone();
			skils
				.attr('class','')
				.addClass(this.config.skills_list_class)
				.find('li')
					.attr('class','')
					.addClass(this.config.skills_item_class);
			full_slider.append(skils);

			var link=$('<a/>',{
				class:this.config.slider_link_class,
				html:this.config.slider_link_icon
			});
			link.append($('<span/>',{
				class:this.config.slider_link_text_class,
				text:this.config.slider_link_text
			}));

			full_slider.append(link);

			slider_here.append(full_slider);

			//создание блока управления
			var img=data.find('.image');
			var src=img.attr('href');
			img=img.find('img').attr('class','');
			control_prev_tab.append(img.clone().addClass(this.config.here_img_class));
			control_next_tab.append(img.clone().addClass(this.config.here_img_class));

			img.attr('src',src);
			slider_control_here.append(img.clone().addClass(this.config.here_img_class));
		}
		this.slider.html('');
		this.slider.append(slider_here);
		controls_tab_class.append(slider_control_here);
		controls_tab_class.append(control_prev_tab);
		controls_tab_class.append(control_next_tab);
		this.slider.append(controls_tab_class);
	};
	
	$.fn.settler_slider=function(options){
		return this.each(function(options){
			new settler_slider(this,options)
		})
	}
})(jQuery);

$('.slider').settler_slider();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm1hcC5qcyIsIm1lbnUuanMiLCJqcXVlcnkubmV4dF9pdGVtX2FuaW1hdGlvbi5qcyIsInNjcm9sbF9ibG9ja19tZW51LmpzIiwiYmdfYW5pbWF0aW9uLmpzIiwianF1ZXJ5LnNsaWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG4gICQoJy5jaXJjbGUnKS5waWVDaGFydCh7XG4gICAgYmFyQ29sb3I6ICcjMDA0Y2QxJyxcbiAgICB0cmFja0NvbG9yOiAnI2RmZGNkNScsXG4gICAgbGluZUNhcDogJ2J1dHQnLFxuICAgIGxpbmVXaWR0aDogMjAsXG4gICAgc2l6ZTogMTEwLFxuICAgIG9uU3RlcDogZnVuY3Rpb24gKGZyb20sIHRvLCBwZXJjZW50KSB7XG4gICAgICAkKHRoaXMuZWxlbWVudCkuZmluZCgnY2FudmFzJykuY3NzKCdvcGFjaXR5JyxwZXJjZW50LzEwMClcbiAgICB9XG4gIH0pO1xuICAkKFwiLnBhZ2Vfc2Nyb2xsZS1kb3duXCIpLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiB3aW5kb3cuaW5uZXJIZWlnaHR9LCAxNTAwKTtcbiAgfSk7XG4gICQoXCIucGFnZV9zY3JvbGxlLXVwXCIpLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAwfSwgMTUwMCk7XG4gIH0pO1xuICAvLyQoJy5zbGlkZXInKS5zZXR0bGVyX3NsaWRlcigpO1xufSkoKTtcblxuZnVuY3Rpb24gbG9hZFNjcmlwdCh1cmwpe1xuICB2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gIGUuc3JjID0gdXJsO1xuICBlLnR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKGUpO1xufVxuIiwiKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICBpZiAoJCgnI21hcHMnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8qICBtYXAuc2V0T3B0aW9ucyh7IG1pblpvb206IDcsIG1heFpvb206IDI1IH0pO1xuICAgICAgICAgbWFwLnNldFpvb20oOCkqL1xuICAgICAgICB2YXIgbWFwX3NyYyA9IFwiaHR0cDovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/dj0zLmV4cCZzaWduZWRfaW49ZmFsc2UmbGFuZ3VhZ2U9cnUtUlUmcmVnaW9uPXVrJmxpYnJhcmllcz1wbGFjZXNcIlxuICAgICAgICBtYXBfc3JjICs9IFwiJmtleT1BSXphU3lEYVE5dEJkUmxzOFFXN05FUmxoeFVNZ2s1SjVUZUhLZG9cIlxuICAgICAgICBtYXBfc3JjICs9IFwiJmNhbGxiYWNrPW1hcEluaXRcIlxuICAgICAgICBsb2FkU2NyaXB0KG1hcF9zcmMpXG4gICAgfVxufSkoKVxuZnVuY3Rpb24gbWFwSW5pdCgpIHtcbiAgICB2YXIgc3R5bGVzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmVcIixcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXG4gICAgICAgICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiM0ZjRmNGVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImxhbmRzY2FwZVwiLFxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjZjJmMmYyXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2lcIixcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIixcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInNhdHVyYXRpb25cIjogLTEwMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiA0NVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcInNpbXBsaWZpZWRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuYXJ0ZXJpYWxcIixcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMuaWNvblwiLFxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdFwiLFxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwid2F0ZXJcIixcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzQzNjlhYVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9uXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICBdO1xuICAgIHZhciBzdHlsZWRNYXAgPSBuZXcgZ29vZ2xlLm1hcHMuU3R5bGVkTWFwVHlwZShzdHlsZXMsXG4gICAgICAgIHtuYW1lOiBcIlN0eWxlZCBNYXBcIn0pO1xuICAgIHZhciBtYXBPcHRpb25zID0ge1xuICAgICAgICB6b29tOiAxMSxcbiAgICAgICAgY2VudGVyOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDQ3LjEwMDU2NiwgMzcuNTM3NjM1MyksXG4gICAgICAgIG1hcFR5cGVDb250cm9sT3B0aW9uczoge1xuICAgICAgICAgICAgbWFwVHlwZUlkczogW2dvb2dsZS5tYXBzLk1hcFR5cGVJZC5ST0FETUFQLCAnbWFwX3N0eWxlJ11cbiAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZURlZmF1bHRVSTogdHJ1ZSxcbiAgICAgICAgem9vbUNvbnRyb2w6ZmFsc2UsXG4gICAgICAgIHNjYWxlQ29udHJvbDpmYWxzZSxcbiAgICAgICAgc2Nyb2xsd2hlZWw6ZmFsc2VcbiAgICB9O1xuICAgIHZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXBzJyksXG4gICAgICAgIG1hcE9wdGlvbnMpO1xuICAgIG1hcC5tYXBUeXBlcy5zZXQoJ21hcF9zdHlsZScsIHN0eWxlZE1hcCk7XG4gICAgbWFwLnNldE1hcFR5cGVJZCgnbWFwX3N0eWxlJyk7XG59LyoqXG4gKiBDcmVhdGVkIGJ5IG1heCBvbiAyOS4wOS4xNi5cbiAqL1xuIiwidmFyIGFuaW1hdGlvbkVuZCA9ICd3ZWJraXRBbmltYXRpb25FbmQgbW96QW5pbWF0aW9uRW5kIE1TQW5pbWF0aW9uRW5kIG9hbmltYXRpb25lbmQgYW5pbWF0aW9uZW5kJztcbihmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICAkKCcuaGVhZGVyLW1lbnUnKS5vbihhbmltYXRpb25FbmQsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZighJCh0aGlzKS5oYXNDbGFzcygnYW5pbWF0aW9uX3NoaXJtYScpICYmIGV2ZW50LmFuaW1hdGlvbk5hbWU9PSdhbmltYXRpb25fZmFkZU91dCcpIHtcbiAgICAgICAgICAgICQoJy5oZWFkZXItbWVudScpLnJlbW92ZUNsYXNzKCdoZWFkZXItbWVudV9hY3RpdmUnKTtcbiAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaGlkZV9zY3JvbGwnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnLmhlYWRlci1tZW51LWJ1dHRvbicpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2hlYWRlci1tZW51LWJ1dHRvbl9hY3RpdmUnKSkge1xuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaGVhZGVyLW1lbnUtYnV0dG9uX2FjdGl2ZScpO1xuICAgICAgICAgICAgJCgnLmhlYWRlci1tZW51JylcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2FuaW1hdGlvbl9mYWRlT3V0JylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FuaW1hdGlvbl9zaGlybWEnKTtcbiAgICAgICAgICAgICQoJy5oZWFkZXItbWVudV9faXRlbScpLm5leHRfaXRlbV9hbmltYXRpb24oe2FuaW1hdGlvbl9jbGFzczonaXRlbS1oaWRlJyxwcmV3X2NsYXNzOidpdGVtLXNob3cnfSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdoZWFkZXItbWVudS1idXR0b25fYWN0aXZlJyk7XG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2hpZGVfc2Nyb2xsJyk7XG4gICAgICAgICAgICAkKCcuaGVhZGVyLW1lbnUnKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnYW5pbWF0aW9uX2ZhZGVPdXQnKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnaGVhZGVyLW1lbnVfYWN0aXZlJylcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2FuaW1hdGlvbl9zaGlybWEnKTtcbiAgICAgICAgICAgICQoJy5oZWFkZXItbWVudV9faXRlbScpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpdGVtLWhpZGUnKVxuICAgICAgICAgICAgICAgIC5uZXh0X2l0ZW1fYW5pbWF0aW9uKHthbmltYXRpb25fY2xhc3M6J2l0ZW0tc2hvdyd9KVxuICAgICAgICB9XG4gICAgfSlcbn0pKCk7IiwiOyhmdW5jdGlvbigkKXtcblx0dmFyIHRpbWVyX2lkID0gZmFsc2U7XG5cdHZhciBhbmltYXRlX2VsZW1lbnQsY29uZmlnO1xuXHR2YXIgdF9lbDtcblx0dmFyIGRlZmF1bHRzPXtcblx0XHRhbmltYXRpb25fY2xhc3M6dW5kZWZpbmVkLFxuXHRcdHByZXdfY2xhc3M6dW5kZWZpbmVkLFxuXHRcdHRpbWVfaW50ZXJ2YWw6MTAwXG5cdH07XG5cdFxuXHRmdW5jdGlvbiBuZXh0X2l0ZW1fYW5pbWF0aW9uKGVsZW1lbnQsb3B0aW9ucyl7XG5cdFx0YW5pbWF0ZV9lbGVtZW50PSQoZWxlbWVudClcblx0XHRjb25maWc9JC5leHRlbmQoe30sZGVmYXVsdHMsb3B0aW9ucyk7XG5cdFx0aWYoY29uZmlnLmFuaW1hdGlvbl9jbGFzcz09dW5kZWZpbmVkKXtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ1BhcmFtZXRyIGFuaW1hdGlvbl9jbGFzcyBub3QgZm91bmQnKVxuXHRcdH1cblx0XHR0aGlzLmluaXQoKTtcdFxuXHR9XG5cdG5leHRfaXRlbV9hbmltYXRpb24ucHJvdG90eXBlLmFuaW1hdGlvbl9zdGFydD1mdW5jdGlvbigpe1xuXHRcdHRfZWwgPSBhbmltYXRlX2VsZW1lbnQubm90KCcuJyArIGNvbmZpZy5hbmltYXRpb25fY2xhc3MpLmZpcnN0KCk7XG5cdFx0aWYgKHRfZWwubGVuZ3RoID4gMCkge1xuXHRcdFx0dF9lbC5hZGRDbGFzcyhjb25maWcuYW5pbWF0aW9uX2NsYXNzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2xlYXJJbnRlcnZhbCh0aW1lcl9pZCk7XG5cdFx0fVxuXHRcdGlmKGNvbmZpZy5wcmV3X2NsYXNzIT11bmRlZmluZWQpdF9lbC5yZW1vdmVDbGFzcyhjb25maWcucHJld19jbGFzcylcblx0fVxuXG5cdG5leHRfaXRlbV9hbmltYXRpb24ucHJvdG90eXBlLmluaXQ9ZnVuY3Rpb24oKXtcblx0XHRhbmltYXRlX2VsZW1lbnQucmVtb3ZlQ2xhc3MoY29uZmlnLmFuaW1hdGlvbl9jbGFzcyk7XG5cdFx0dGltZXJfaWQ9c2V0SW50ZXJ2YWwodGhpcy5hbmltYXRpb25fc3RhcnQsY29uZmlnLnRpbWVfaW50ZXJ2YWwpO1xuXHR9O1xuXHRcblx0JC5mbi5uZXh0X2l0ZW1fYW5pbWF0aW9uPWZ1bmN0aW9uKG9wdGlvbnMpe1xuXHRcdG5ldyBuZXh0X2l0ZW1fYW5pbWF0aW9uKHRoaXMsb3B0aW9ucyk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gICAgaWYoJCgnLmNvbnRlbnQtYmxvZ19fbWVudScpLmxlbmd0aD4wKXtcbiAgICAgICAgdmFyIHRvcF9wb3NfbWVudSA9ICQoJy5jb250ZW50LWJsb2dfX21lbnUnKS5vZmZzZXQoKS50b3A7XG4gICAgICAgICQoJy5jb250ZW50LWJsb2dfX21lbnUgYVtocmVmXj0jXScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdChldmVudCk7XG4gICAgICAgICAgICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtzY3JvbGxUb3A6ICQoJCh0aGlzKS5hdHRyKCdocmVmJykpLm9mZnNldCgpLnRvcH0sIDUwMCk7XG4gICAgICAgIH0pO1xuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNjcm9sbF92YWx1ZSA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgICAgIC8v0L7RgtGA0LDQsdC+0YLQutCwINC/0YDQuNC70LXQv9Cw0L3QuNGPINCx0LvQvtC60LAg0Lgg0YPQv9C40YDQsNC90LjRjyDQsiDQv9C+0LTQstCw0LtcbiAgICAgICAgICAgIGlmICh0b3BfcG9zX21lbnUgPCBzY3JvbGxfdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZigkKCcuZm9vdGVyJykucG9zaXRpb24oKS50b3A8c2Nyb2xsX3ZhbHVlKyQoJy5jb250ZW50LWJsb2dfX21lbnUnKS5oZWlnaHQoKSl7XG4gICAgICAgICAgICAgICAgICAgICQoJy5jb250ZW50LWJsb2dfX21lbnUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdjb250ZW50LWJsb2dfX21lbnVfZml4ZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdjb250ZW50LWJsb2dfX21lbnVfdG8tZG93bicpXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICQoJy5jb250ZW50LWJsb2dfX21lbnUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdjb250ZW50LWJsb2dfX21lbnVfZml4ZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdjb250ZW50LWJsb2dfX21lbnVfdG8tZG93bicpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCcuY29udGVudC1ibG9nX19tZW51JykucmVtb3ZlQ2xhc3MoJ2NvbnRlbnQtYmxvZ19fbWVudV9maXhlZCcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL9C+0YLRgNCw0LHQvtGC0LrQsCDQv9C+0LTRgdCy0LXRgtC60Lgg0LzQtdC90Y5cbiAgICAgICAgICAgIHZhciBsaW5rX2xpc3Q9JCgnLmNvbnRlbnQtYmxvZ19fbWVudSBhW2hyZWZePSNdJyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpPTA7aTxsaW5rX2xpc3QubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRfdG9fdG9wPSQoJChsaW5rX2xpc3RbaV0pLmF0dHIoJ2hyZWYnKSkub2Zmc2V0KCkudG9wO1xuICAgICAgICAgICAgICAgIGlmKHNjcm9sbF92YWx1ZTxlbGVtZW50X3RvX3RvcC0xMDApe1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVfbWVudV9pdGVtKGxpbmtfbGlzdCxpKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihpPT1saW5rX2xpc3QubGVuZ3RoKWFjdGl2ZV9tZW51X2l0ZW0obGlua19saXN0LGkpXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhY3RpdmVfbWVudV9pdGVtKGxpbmtfbGlzdCxpKXtcbiAgICAgICAgbGlua19saXN0LnJlbW92ZUNsYXNzKCdjb250ZW50LWJsb2dfX2xpbmtfYWN0aXZlJyk7XG4gICAgICAgIGlmKGk8MSlpPTE7XG4gICAgICAgICQobGlua19saXN0W2ktMV0pLmFkZENsYXNzKCdjb250ZW50LWJsb2dfX2xpbmtfYWN0aXZlJyk7XG4gICAgfVxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIGlmICgkKCcucGFyYWxheC1jb250cm9sJykubGVuZ3RoID4gMCkge1xuICAgICAgICBpZihuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGhvbmV8aVBhZHxpUG9kfEFuZHJvaWR8QmxhY2tCZXJyeXxJRU1vYmlsZS9pKSkge1xuICAgICAgICAgICAgLy/QtNC70Y8g0LzQvtCx0LjQu9GM0L3Ri9GFINGD0YHRgtGA0L7QudGB0YLQsiDQvdC1INCz0YDRg9C30LjRgtGMINC/0YDQsNC70LDQutGBINC4INCy0LjQtNC10L5cbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgJCgnLnBhcmFsYXgnKS5wYXJhbGxheCgpO1xuICAgICAgICAgICAgdmFyIEJWID0gbmV3ICQuQmlnVmlkZW8oe2NvbnRhaW5lcjogJCgnLmJsb2NrLXZpZGVvLWJnJyksIHVzZUZsYXNoRm9yRmlyZWZveDpmYWxzZX0pO1xuICAgICAgICAgICAgQlYuaW5pdCgpO1xuICAgICAgICAgICAgaWYgKCEhd2luZG93Lm9wZXJhIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignIE9QUi8nKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgQlYuc2hvdygnL2Fzc2V0cy92aWRlby9uaWdodC5vZ3YnLCB7ZG9Mb29wOiB0cnVlLCBhbWJpZW50OiBmYWxzZX0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBCVi5zaG93KCcvYXNzZXRzL3ZpZGVvL25pZ2h0Lm1wNCcsIHtcbiAgICAgICAgICAgICAgICAgICAgZG9Mb29wOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhbWJpZW50OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgYWx0U291cmNlOiAnL2Fzc2V0cy92aWRlby9uaWdodC5vZ3YnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkKCcjYmlnLXZpZGVvLXdyYXAgdmlkZW8nKS5mYWRlT3V0KDApO1xuICAgICAgICAgICAgQlYuZ2V0UGxheWVyKCkub24oJ2xvYWRlZG1ldGFkYXRhJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAkKCcjYmlnLXZpZGVvLXdyYXAgdmlkZW8nKS5mYWRlSW4oJ3Nsb3cnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSkoKTsiLCI7KGZ1bmN0aW9uKCQpe1xuXHR2YXIgZGVmYXVsdHM9e1xuXHRcdHVybDp1bmRlZmluZWQsXG5cdFx0aGVyZV90YWJfY2xhc3M6J3NsaWRlcl9fbGVmdC10YWInLFxuXHRcdGNvbnRyb2xzX3RhYl9jbGFzczonc2xpZGVyX19yaWd0aC10YWInLFxuXHRcdGNvbnRyb2xfaGVyZV90YWJfY2xhc3M6J3NsaWRlcl9faGVyZS1zbGlkZScsXG5cdFx0Y29udHJvbF9wcmV2X3RhYl9jbGFzczonc2xpZGVyX19jb250cm9sIHNsaWRlcl9fY29udHJvbC1wcmV2Jyxcblx0XHRjb250cm9sX3ByZXZfaWNvbjonPGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWRvd24gc2xpZGVyX19idXR0b24gc2xpZGVyX19idXR0b24tcHJldlwiPjwvaT4nLFxuXHRcdGNvbnRyb2xfbmV4dF90YWJfY2xhc3M6J3NsaWRlcl9fY29udHJvbCBzbGlkZXJfX2NvbnRyb2wtbmV4dCcsXG5cdFx0Y29udHJvbF9uZXh0X2ljb246JzxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi11cCBzbGlkZXJfX2J1dHRvbiBzbGlkZXJfX2J1dHRvbi1wcmV2XCI+PC9pPicsXG5cdFx0aGVyZV9pbWdfY2xhc3M6J3NsaWRlcl9faGVyZS1zbGlkZV9faW1hZ2UnLFxuXHRcdGNvbnRyb2xfaW1hZ2VfcHJldjonc2xpZGVyX19jb250cm9sX19pbWFnZScsXG5cdFx0Y29udHJvbF9pbWFnZV9uZXh0OidzbGlkZXJfX2NvbnRyb2xfX2ltYWdlJyxcblxuXHRcdGZ1bGxfc2xpZGVyX2NsYXNzOidzbGlkZXJfX2Z1bGwtaW5mb3JtYXRpb24nLFxuXHRcdGZ1bGxfc2xpZGVyX3RpdGxlX2NsYXNzOidzbGlkZXJfX3RpdGxlJyxcblx0XHRza2lsbHNfbGlzdF9jbGFzczonc2xpZGVyX19za2lsbHMtbGlzdCcsXG5cdFx0c2tpbGxzX2l0ZW1fY2xhc3M6J3NsaWRlcl9fc2tpbGxzLWl0ZW0nLFxuXHRcdHNsaWRlcl9saW5rX2NsYXNzOidzbGlkZXJfX2xpbmsnLFxuXHRcdHNsaWRlcl9saW5rX2ljb246JzxpIGNsYXNzPVwiZmEgZmEtbGluayBzbGlkZXJfX2xpbmstaWNvblwiPjwvaT4nLFxuXHRcdHNsaWRlcl9saW5rX3RleHRfY2xhc3M6J3NsaWRlcl9fbGluay10ZXh0Jyxcblx0XHRzbGlkZXJfbGlua190ZXh0OifQn9C10YDQtdC50YLQuCDQvdCwINGB0LDQudGCJyxcblx0fTtcblxuXHRmdW5jdGlvbiBzZXR0bGVyX3NsaWRlcihlbGVtZW50LG9wdGlvbnMpe1xuXHRcdHRoaXMuc2xpZGVyPSQoZWxlbWVudCk7XG5cdFx0dGhpcy5jb25maWc9JC5leHRlbmQoe30sZGVmYXVsdHMsb3B0aW9ucyk7XG5cblx0XHR0aGlzLmluaXQoKTtcblx0fVxuXG5cdHNldHRsZXJfc2xpZGVyLnByb3RvdHlwZS5pbml0PWZ1bmN0aW9uKCl7XG5cdFx0dmFyIHNsaWRlc19zdGFydD10aGlzLnNsaWRlci5maW5kKCd1bC5zbGlkZXItaG9tZT5saScpO1xuXG5cdFx0dmFyIHNsaWRlcl9oZXJlPSQoJzxkaXYvPicse1xuXHRcdFx0Y2xhc3M6dGhpcy5jb25maWcuaGVyZV90YWJfY2xhc3Ncblx0XHR9KTtcblx0XHR2YXIgY29udHJvbHNfdGFiX2NsYXNzPSQoJzxkaXYvPicse1xuXHRcdFx0Y2xhc3M6dGhpcy5jb25maWcuY29udHJvbHNfdGFiX2NsYXNzXG5cdFx0fSk7XG5cdFx0dmFyIHNsaWRlcl9jb250cm9sX2hlcmU9JCgnPGRpdi8+Jywge1xuXHRcdFx0Y2xhc3M6IHRoaXMuY29uZmlnLmNvbnRyb2xfaGVyZV90YWJfY2xhc3Ncblx0XHR9KTtcblx0XHR2YXIgY29udHJvbF9wcmV2X3RhYj0kKCc8ZGl2Lz4nLCB7XG5cdFx0XHRjbGFzczogdGhpcy5jb25maWcuY29udHJvbF9wcmV2X3RhYl9jbGFzcyxcblx0XHRcdGh0bWw6dGhpcy5jb25maWcuY29udHJvbF9wcmV2X2ljb25cblx0XHR9KTtcblx0XHR2YXIgY29udHJvbF9uZXh0X3RhYj0kKCc8ZGl2Lz4nLCB7XG5cdFx0XHRjbGFzczogdGhpcy5jb25maWcuY29udHJvbF9uZXh0X3RhYl9jbGFzcyxcblx0XHRcdGh0bWw6dGhpcy5jb25maWcuY29udHJvbF9uZXh0X2ljb25cblx0XHR9KTtcblxuXHRcdGZvcih2YXIgaT0wO2k8c2xpZGVzX3N0YXJ0Lmxlbmd0aDtpKyspe1xuXHRcdFx0ZGF0YT0kKHNsaWRlc19zdGFydFtpXSk7XG5cblx0XHRcdC8v0YHQvtC30LTQsNC90LjQtSDQsdC70L7QutCwINC/0L7Qu9C90L7QuSDQuNC90YTQvtGA0LzQsNGG0LjQuFxuXHRcdFx0dmFyIGZ1bGxfc2xpZGVyPSQoJzxkaXYvPicse1xuXHRcdFx0XHRjbGFzczp0aGlzLmNvbmZpZy5mdWxsX3NsaWRlcl9jbGFzc1xuXHRcdFx0fSk7XG5cdFx0XHRmdWxsX3NsaWRlci5hcHBlbmQoJCgnPGRpdi8+Jyx7XG5cdFx0XHRcdGNsYXNzOnRoaXMuY29uZmlnLmZ1bGxfc2xpZGVyX3RpdGxlX2NsYXNzLFxuXHRcdFx0XHR0ZXh0OmRhdGEuZmluZCgnLnRpdGxlJykudGV4dCgpXG5cdFx0XHR9KSk7XG5cdFx0XHR2YXIgc2tpbHM9ZGF0YS5maW5kKCcuc2tpbGxzJykuZmlyc3QoKS5jbG9uZSgpO1xuXHRcdFx0c2tpbHNcblx0XHRcdFx0LmF0dHIoJ2NsYXNzJywnJylcblx0XHRcdFx0LmFkZENsYXNzKHRoaXMuY29uZmlnLnNraWxsc19saXN0X2NsYXNzKVxuXHRcdFx0XHQuZmluZCgnbGknKVxuXHRcdFx0XHRcdC5hdHRyKCdjbGFzcycsJycpXG5cdFx0XHRcdFx0LmFkZENsYXNzKHRoaXMuY29uZmlnLnNraWxsc19pdGVtX2NsYXNzKTtcblx0XHRcdGZ1bGxfc2xpZGVyLmFwcGVuZChza2lscyk7XG5cblx0XHRcdHZhciBsaW5rPSQoJzxhLz4nLHtcblx0XHRcdFx0Y2xhc3M6dGhpcy5jb25maWcuc2xpZGVyX2xpbmtfY2xhc3MsXG5cdFx0XHRcdGh0bWw6dGhpcy5jb25maWcuc2xpZGVyX2xpbmtfaWNvblxuXHRcdFx0fSk7XG5cdFx0XHRsaW5rLmFwcGVuZCgkKCc8c3Bhbi8+Jyx7XG5cdFx0XHRcdGNsYXNzOnRoaXMuY29uZmlnLnNsaWRlcl9saW5rX3RleHRfY2xhc3MsXG5cdFx0XHRcdHRleHQ6dGhpcy5jb25maWcuc2xpZGVyX2xpbmtfdGV4dFxuXHRcdFx0fSkpO1xuXG5cdFx0XHRmdWxsX3NsaWRlci5hcHBlbmQobGluayk7XG5cblx0XHRcdHNsaWRlcl9oZXJlLmFwcGVuZChmdWxsX3NsaWRlcik7XG5cblx0XHRcdC8v0YHQvtC30LTQsNC90LjQtSDQsdC70L7QutCwINGD0L/RgNCw0LLQu9C10L3QuNGPXG5cdFx0XHR2YXIgaW1nPWRhdGEuZmluZCgnLmltYWdlJyk7XG5cdFx0XHR2YXIgc3JjPWltZy5hdHRyKCdocmVmJyk7XG5cdFx0XHRpbWc9aW1nLmZpbmQoJ2ltZycpLmF0dHIoJ2NsYXNzJywnJyk7XG5cdFx0XHRjb250cm9sX3ByZXZfdGFiLmFwcGVuZChpbWcuY2xvbmUoKS5hZGRDbGFzcyh0aGlzLmNvbmZpZy5oZXJlX2ltZ19jbGFzcykpO1xuXHRcdFx0Y29udHJvbF9uZXh0X3RhYi5hcHBlbmQoaW1nLmNsb25lKCkuYWRkQ2xhc3ModGhpcy5jb25maWcuaGVyZV9pbWdfY2xhc3MpKTtcblxuXHRcdFx0aW1nLmF0dHIoJ3NyYycsc3JjKTtcblx0XHRcdHNsaWRlcl9jb250cm9sX2hlcmUuYXBwZW5kKGltZy5jbG9uZSgpLmFkZENsYXNzKHRoaXMuY29uZmlnLmhlcmVfaW1nX2NsYXNzKSk7XG5cdFx0fVxuXHRcdHRoaXMuc2xpZGVyLmh0bWwoJycpO1xuXHRcdHRoaXMuc2xpZGVyLmFwcGVuZChzbGlkZXJfaGVyZSk7XG5cdFx0Y29udHJvbHNfdGFiX2NsYXNzLmFwcGVuZChzbGlkZXJfY29udHJvbF9oZXJlKTtcblx0XHRjb250cm9sc190YWJfY2xhc3MuYXBwZW5kKGNvbnRyb2xfcHJldl90YWIpO1xuXHRcdGNvbnRyb2xzX3RhYl9jbGFzcy5hcHBlbmQoY29udHJvbF9uZXh0X3RhYik7XG5cdFx0dGhpcy5zbGlkZXIuYXBwZW5kKGNvbnRyb2xzX3RhYl9jbGFzcyk7XG5cdH07XG5cdFxuXHQkLmZuLnNldHRsZXJfc2xpZGVyPWZ1bmN0aW9uKG9wdGlvbnMpe1xuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24ob3B0aW9ucyl7XG5cdFx0XHRuZXcgc2V0dGxlcl9zbGlkZXIodGhpcyxvcHRpb25zKVxuXHRcdH0pXG5cdH1cbn0pKGpRdWVyeSk7XG5cbiQoJy5zbGlkZXInKS5zZXR0bGVyX3NsaWRlcigpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
