(function() {
    'use strict';
    if ($('.paralax-control').length > 0) {
        if(!isMobile()){
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