'use strict';
module.exports = function() {
    $.gulp.task('css_other', function() {
        return $.gulp.src('./source/style/other/*.css')
            .pipe($.gp.concat("other.css"))
            //.pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
            .pipe($.gp.sourcemaps.write())
            //.pipe($.gp.csso())
            .pipe($.gulp.dest($.config.root+'/assets/css/'))
            .pipe($.browserSync.stream());
    })
};