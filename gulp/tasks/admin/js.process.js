'use strict';

module.exports = function() {
  $.gulp.task('js.admin:process', function() {
    return $.gulp.src($.path.admin)
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.concat('admin.js'))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.root + '/admin/js'))
      .pipe($.gulp.dest($.config.dist + '/admin/js'))
  })
};
