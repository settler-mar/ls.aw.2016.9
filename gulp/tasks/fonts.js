'use strict';

module.exports = function() {
  $.gulp.task('fonts', function() {
	  return $.gulp.src("./source/fonts/*.{ttf,otf}")
	    .pipe($.gp.fontgen({
	      dest: $.config.root+'/fonts'
	    }));
  })
};
