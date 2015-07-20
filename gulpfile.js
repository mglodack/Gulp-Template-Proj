var browserify = require('gulp-browserify');
var gulp = require('gulp');
var react = require('gulp-react');
var uglify = require('gulp-uglify');

var config = require('./config.json');
var env = config.Build;
var src = config.Source;
var tasks = config.Tasks;

var jsDir = './src/js/**/*.js';

gulp.task('clean', require(tasks.Clean)(gulp, env.CleanDir));

// Parse and compress JS and JSX files
gulp.task('javascript', require(tasks.JS)(gulp, src.JsDir, env.JsBuildDir));

gulp.task('html', require(tasks.Html)(gulp, src.HtmlDir, env.BuildDir));

gulp.task('default', () => {
  console.log("Not yet implemented!");
});
