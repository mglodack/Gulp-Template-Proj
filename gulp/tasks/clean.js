var clean = require('gulp-clean');

module.exports = (gulp, dir) => {
  return () => {
    return gulp.src([dir], {read:false}).pipe(clean());
  }
};
