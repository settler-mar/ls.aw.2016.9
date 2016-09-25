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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICAkKCcuYXV0aF9idXR0b24nKS5jbGljayhmdW5jdGlvbigpe1xuICAgIHZhciBlbD0kKCcjaGVhZGVyIC5jb250YWluZXInKVxuICAgIGlmKGVsLmhhc0NsYXNzKCdkb3BfbWVudScpKXtcbiAgICAgIGVsLmFkZENsYXNzKCdyZXR1cm5fYW5pbScpXG4gICAgICBlbC5yZW1vdmVDbGFzcygnZG9wX21lbnUnKVxuICAgIH1lbHNle1xuICAgICAgZWwucmVtb3ZlQ2xhc3MoJ3JldHVybl9hbmltJylcbiAgICAgIGVsLmFkZENsYXNzKCdkb3BfbWVudScpXG4gICAgfVxuXG4gIH0pXG59KSgpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
