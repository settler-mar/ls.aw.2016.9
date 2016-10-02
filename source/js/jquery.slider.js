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
			var skils=data.find('.skills');
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