var browserify = require('gulp-browserify');
var gulp = require('gulp');
var react = require('gulp-react');
var uglify = require('gulp-uglify');

var config = require('./config.json');
var env = config.Environment;
var src = config.Source;
var tasks = config.Tasks;

var jsDir = './src/js/**/*.js';

gulp.task('clean', require(tasks.Clean)(gulp, env.CleanDir));

// Parse and compress JS and JSX files
gulp.task('javascript', () => {
  var response = gulp.src(jsDir)
      .pipe(react())
      .pipe(gulp.dest(config.JsBuildDir));

  response.on('error', (data) => {
    console.log(data);
  });

  return response;
});
gulp.task('default', () => {
  console.log("Not yet implemented!);
});
