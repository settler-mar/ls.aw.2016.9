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