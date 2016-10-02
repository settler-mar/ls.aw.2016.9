/*;(function($){
	var defaults={
		url:undefined,
		here_tab_class:'slider__left-tab',
		controls_tab_class:'slider__rigth-tab',
		control_here_tab_class:'slider__here-slide',
		control_next_tab_class:'slider__control slider__control-next',
		control_next_icon:'<i class="fa fa-chevron-down slider__button slider__button-next"></i>',
		control_prew_tab_class:'slider__control slider__control-prev',
		control_prew_icon:'<i class="fa fa-chevron-up slider__button slider__button-next"></i>'

	};
	
	function setler_slider(element,options){
		this.slider=$(element);
		this.config=$.extend({},defaults,options);

		var slides_start=this.slider.find('ul');

		var slider_here=$(this.config.here_tab_class)
		var slider_control_here=$(this.config.control_here_tab_class)
		for(var i=0;i<slides_start.length;i++){

		}
		this.init();
	}

	setler_slider.prototype.init=function(){

		//this.table.before(table_length);
	};
	
	$.fn.setler_slider=function(options){
		return this.each(function(options){
			new setler_slider(this,options)
		})
	}
})(jQuery);
