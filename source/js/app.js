(function() {
  'use strict';
  $('.auth_button').click(function(){
    var el=$('#header .container')
    if(el.hasClass('dop_menu')){
      el.addClass('return_anim')
      el.removeClass('dop_menu')
    }else{
      el.removeClass('return_anim')
      el.addClass('dop_menu')
    }

  })
})();