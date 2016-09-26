'use strict';
module.exports = function() {
    $.gulp.task('fonts_css:concat', function() {
        return $.gulp.src($.config.root+'/fonts/*.css')
            .pipe($.gp.concat("fonts.css"))
            .pipe($.gp.csso())
            .pipe($.gulp.dest($.config.root+'/fonts/'))
    })
};