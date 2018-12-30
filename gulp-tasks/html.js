const gulp = require('gulp'),
  replace = require('gulp-replace'),
  paths = require('../task-sets/paths.js');

module.exports = () => gulp.src('./index.html')
  .pipe(replace('development.js', 'production.min.js'))
  .pipe(replace('/dist/js/', 'js/'))
  .pipe(replace('app.js', 'app.min.js'))
  .pipe(replace('http://localhost:8080/dist/', ''))
  .pipe(gulp.dest(paths.dist));
