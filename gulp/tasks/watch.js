'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch('./source/js/**/*.js', $.gulp.series('js:process','js.admin:process'));
    $.gulp.watch('./source/style/**/*.scss', $.gulp.series('sass','sass.admin'));
    $.gulp.watch('./source/template/**/*.pug', $.gulp.series('pug','pug.admin'));
    $.gulp.watch('./source/images/**/*.*', $.gulp.series('copy:image'));
    $.gulp.watch('./source/sprite/**/*.svg', $.gulp.series('sprite:svg'));
    $.gulp.watch('./source/sprite/**/*.png', $.gulp.series('sprite:png'));
    $.gulp.watch('./source/php/**/*.*', $.gulp.series('copy:php'));
  });
};
