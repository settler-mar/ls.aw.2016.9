'use strict';
module.exports = function() {
    $.gulp.task('fonts_css:concat', function() {
        return $.gulp.src($.config.root+'/fonts/*.css')
            .pipe($.gp.concat("fonts.css"))
           /* .pipe($.gp.replace('-Bold"', '"'))
            .pipe($.gp.replace('-BoldItalic"', '"'))
            .pipe($.gp.replace('-Italic"', '"'))
            .pipe($.gp.replace('-Light"', '"'))
            .pipe($.gp.replace('-LightItalic"', '"'))
            .pipe($.gp.replace('-Medium"', '"'))
            .pipe($.gp.replace('-MediumItalic"', '"'))
            .pipe($.gp.replace('-Regular"', '"'))
            .pipe($.gp.replace('RobotoItalic"', 'Roboto"'))*/
            .pipe($.gulp.dest($.config.root+'/fonts/'))
    })
};