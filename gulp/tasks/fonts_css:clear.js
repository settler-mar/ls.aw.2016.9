'use strict';
module.exports = function() {
    $.gulp.task('fonts_css:clear', function() {
        return $.gulp.src([$.config.root+'/fonts/*.css'])
            .pipe($.gp.ignore.exclude('fonts.css'))
            .pipe($.gp.clean({force: true}))
    })
};