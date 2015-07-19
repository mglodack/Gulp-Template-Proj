var browserify = require('gulp-browserify');
var clean = require('gulp-clean');
var gulp = require('gulp');
var react = require('gulp-react');
var uglify = require('gulp-uglify');

var buildDir = './build';
var jsBuildDir = './build/javascript';
var jsDir = './src/js/**/*.js';

gulp.task('clean', () => {
  return gulp.src(['build/*'], { read: false })
      .pipe(clean());
});

// Parse and compress JS and JSX files
gulp.task('javascript', () => {
  var response = gulp.src(jsDir)
      .pipe(react())
      .pipe(gulp.dest(jsBuildDir));

  response.on('error', (data) => {
    console.log(data);
  });

  return response;
});
gulp.task('default', () => {
  console.log("Not Implemented Yet!");
});
