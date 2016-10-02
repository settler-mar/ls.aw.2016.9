;(function($){
	var defaults={
		url:undefined

	};
	
	function setler_slider(element,options){
		this.table=$(element)
		this.config=$.extend({},defaults,options);
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
