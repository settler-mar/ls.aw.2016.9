/**
 * Created by max on 12.10.16.
 */
;(function($){
  var config;
  var tabs;
  var defaults={
    control:undefined,
    control_item_selector:'.header__menu-linc',
    tab_item_selector:'.content__item',
    active_menu_class:'header__item-active',
    active_tab_class:'content__item-active'
  };

  function tabs(element,options){
    this.config=$.extend({},defaults,options);
    if(this.config.control==undefined){
      console.error('Control box not set')
    }
    this.config.control=$(this.config.control);
    this.tabs=element;
    tabs=this;
    this.init();
  }


  tabs.prototype.init=function(){
    this.config.control.on('click',function () {
      $this=$(this);
      if($this.hasClass(tabs.config.active_menu_class))return;
      var li_click=$this.closest('li');
      var index=li_click.index();
      tabs.config.control.closest('li').removeClass(tabs.config.active_menu_class);
      li_click.addClass(tabs.config.active_menu_class);
      tabs.tabs.removeClass(tabs.config.active_tab_class);
      tabs.tabs.eq(index).addClass(tabs.config.active_tab_class);
    });
    //tabs.tabs.find(this.config.tab_item_selector);
  };

  $.fn.tabs=function(options){
    new tabs(this,options);
    return this;
  }
})(jQuery);
$('.content__list .content__item').tabs({control:'.header__list .header__menu-linc'});