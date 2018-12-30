const gulp = require('gulp');
const webpack = require('webpack-stream');
const paths = require('../task-sets/paths.js');

module.exports = () => gulp.src(`${paths.src}js/app.js`)
  .pipe(webpack(require('../webpack.config.js')))
  .pipe(gulp.dest(`${paths.dist}js/`));
