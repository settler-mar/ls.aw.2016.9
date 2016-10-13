'use strict';
global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks.js'),
    jsFoundation: require('./gulp/paths/js.foundation.js'),
    cssFoundation: require('./gulp/paths/css.foundation.js'),
    app: require('./gulp/paths/app.js'),
    admin: require('./gulp/paths/admin.js')
  },
  gulp: require('gulp'),
  rimraf: require('rimraf'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sass',
    'sass.admin',
    'pug',
    'pug.admin',
    'js:foundation',
    'js.admin:process',
    'js:process',
    'copy:image',
    $.gulp.series(
      'sass:foundation',
      'css:foundation'
    ),
    'sprite:svg',
    'sprite:png',
    'copy:video',
    'fonts',
    'copy:favicon',
    'copy:php'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));
