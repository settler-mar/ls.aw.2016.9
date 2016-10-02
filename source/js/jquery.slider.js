;(function($){
	var defaults={
		url:undefined,
		here_tab_class:'slider__left-tab',
		controls_tab_class:'slider__rigth-tab',
		control_here_tab_class:'slider__here-slide',
		control_prev_tab_class:'slider__control slider__control-prev',
		control_prev_icon:'<i class="fa fa-chevron-down slider__button slider__button-prev"></i>',
		control_next_tab_class:'slider__control slider__control-next',
		control_next_icon:'<i class="fa fa-chevron-up slider__button slider__button-next"></i>',
		here_img_class:'slider__here-slide__image',
		control_image_prev:'slider__control__image',
		control_image_next:'slider__control__image',
		here_img_box_class:'slider__control__image-box slider__control__image-box_here',
		next_img_box_class:'slider__control__image-box slider__control__image-box_next',
		prev_img_box_class:'slider__control__image-box slider__control__image-box_prev',

		full_slide_box_class:'full_slide_box',
		full_slider_class:'slider__full-information',
		full_slider_title_class:'slider__title',
		skills_list_class:'slider__skills-list',
		skills_item_class:'slider__skills-item',
		slider_link_class:'slider__link',
		slider_link_icon:'<i class="fa fa-link slider__link-icon"></i>',
		slider_link_text_class:'slider__link-text',
		slider_link_text:'Перейти на сайт',

		active_here_class:'slider__control__image-box_active',
		control_next_active_class:'slider__control__image-box_next_show',
		control_next__class:'slider__control__image-box_next_show',
		control_prev_active_class:'slider__control__image-box_prev_show',

		active_slide_class:'active',
		show_letter_class:'show_letter',

	};
	function settler_slider(element,options){
		this.slider=$(element);
		this.config=$.extend({},defaults,options);
		this.active_slide=0;
		this.init();
	}
	function test_sel(sel,max){
		if(sel>=max)sel-=max;
		if(sel<0)sel+=max;
		return sel;
	}
	function update_slide(el){
		var here_control=el.here_control.find('>div');
		here_control.removeClass(el.config.active_here_class);
		$(here_control[el.active_slide]).addClass(el.config.active_here_class);

		var next_control=el.next_control.find('>div');
		next_control.removeClass(el.config.control_next_active_class);
		$(next_control[test_sel(el.active_slide+1,el.slider_count)]).addClass(el.config.control_next_active_class);

		var prev_control=el.prev_control.find('>div');
		prev_control.removeClass(el.config.control_prev_active_class);
		$(prev_control[test_sel(el.active_slide-1,el.slider_count)]).addClass(el.config.control_prev_active_class);

		var slider_here=el.slider_here.find('>div');
		slider_here.removeClass(el.config.active_slide_class);
		slider_here.find('.slider__title span').removeClass(el.config.show_letter_class);

		slider_here=$(slider_here[el.active_slide]);
		slider_here.addClass(el.config.active_slide_class);
		slider_here.find('.slider__title span').next_item_animation({animation_class:'item-show'});
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
		this.slider_count=slides_start.length;
		for(var i=0;i<slides_start.length;i++){
			data=$(slides_start[i]);

			//создание блока полной информации
			var full_slider=$('<div/>',{
				class:this.config.full_slider_class
			});

			var title_line=$('<div/>',{
				class:this.config.full_slider_title_class
			});
			title=data.find('.title').text();
			for(var j=0;j<title.length;j++){
				title_line.append($('<span/>',{
					text:title[j]
				}))
			}
			full_slider.append(title_line);

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
			full_slider.wrap($('<div/>',{
				class:this.config.full_slide_box_class
			}));

			//создание блока управления
			var img=data.find('.image');
			var src=img.attr('href');
			img=img.find('img').attr('class','');
			var img_prew=img.clone().addClass(this.config.control_image_prev);
			img_prew=img_prew.wrap($('<div/>',{class:this.config.prev_img_box_class})).parent();
			control_prev_tab.append(img_prew);

			var img_next=img.clone().addClass(this.config.control_image_next);
			img_next=img_next.wrap($('<div/>',{class:this.config.next_img_box_class})).parent();
			control_next_tab.append(img_next);

			img.attr('src',src);
			var img_here=img.clone().addClass(this.config.here_img_class);
			img_here=img_here.wrap($('<div/>',{class:this.config.here_img_box_class})).parent();
			slider_control_here.append(img_here);
		}
		this.slider.html('');
		this.slider.append(slider_here);
		controls_tab_class.append(slider_control_here);
		controls_tab_class.append(control_prev_tab);
		controls_tab_class.append(control_next_tab);
		this.slider.append(controls_tab_class);

		this.here_control=slider_control_here;
		this.next_control=control_next_tab;
		this.prev_control=control_prev_tab;
		this.slider_here=slider_here;
		this.next_control.click(function(){
			slider.active_slide++;
			if(slider.active_slide>=slider.slider_count)slider.active_slide=0;
			update_slide(slider);
		});
		this.prev_control.click(function(){
			slider.active_slide--;
			if(slider.active_slide<0)slider.active_slide=slider.slider_count-1;
			update_slide(slider);
		});
		slider=this;
		update_slide(this);
	};

	$.fn.settler_slider=function(options){
		return new settler_slider(this,options);

	}
})(jQuery);

var settler_slider= $('.slider').settler_slider();