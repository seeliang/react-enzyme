const gulp = require('gulp'),
  paths = require('../../task-sets/paths.js');

module.exports = () => gulp.src([
  `${paths.package}react/umd/react.development.js`,
  `${paths.package}react-dom/umd/react-dom.development.js`,
])
  .pipe(gulp.dest(`${paths.dist}js/vendor/`));
