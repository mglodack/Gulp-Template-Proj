var minifyHtml = require('gulp-minify-html');

module.exports = (gulp, files, target) => {
  return () => {
    var options = {comments:true,spare:true};

    return gulp.src(files)
            .pipe(minifyHtml(options))
            .pipe(gulp.dest(target));
  }
};
