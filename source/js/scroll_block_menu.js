(function() {
    if($('.content-blog__menu').length>0){
        var top_pos_menu = $('.content-blog__menu').offset().top;
        $(window).on('resize',function(){
            top_pos_menu = $('.content-blog__content').offset().top;
        });
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
        $('.content-blog__menu').on('click',function(){
          var $this=$(this)
          if($this.hasClass('mobile_show')){
            $this.removeClass('mobile_show')
          }else{
            $this.addClass('mobile_show')
          }
        })
    }
    function active_menu_item(link_list,i){
        link_list.removeClass('content-blog__link_active');
        if(i<1)i=1;
        $(link_list[i-1]).addClass('content-blog__link_active');
    }
})();