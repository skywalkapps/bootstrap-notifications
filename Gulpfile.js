const gulp = require('gulp');

// Task functions
const sass = require('./gulp/sass.js');
const js = require('./gulp/script.js');
const watch = require('./gulp/watch.js');


// Task definitions

// CSS
gulp.task('sass', gulp.series(sass.compileSass));

// JS
gulp.task('js', gulp.series(js.compileJS));

// WATCH
gulp.task('watch', gulp.parallel(watch.watchAll, watch.browserSync));




// const gulp = require('gulp');
// const pump = require('pump');
// const uglify = require('gulp-uglify');
// const concat = require('gulp-concat');
// const babel = require('gulp-babel');

// const sourcemaps = require('gulp-sourcemaps');

// const sass = require('gulp-sass');
// const postcss = require('gulp-postcss');
// const autoprefixer = require('autoprefixer');
// const cssnano = require('cssnano');

// const rename = require('gulp-rename');
// const log = require('fancy-log');
// const clean = require('gulp-clean');
// const copy = require('gulp-copy');
// const config = require('./config.json');

// GULP CLEAN - Remove contents of distribution folder
// Usage: gulp clean
// -------------------

// gulp.task('clean', (cb) => {
//   pump([
//     gulp.src('dist/**/*', { read: false }),
//     clean()
//   ], cb);
// });

// GULP COPY -

// const copyFiles = (source, dest) => {
//   return (cb) => { gulp.src(source).pipe(gulp.dest(dest)); cb(); };
// };

// gulp.task('copy', gulp.series(
//   copyFiles(['src/assets/**/*'], 'docs/assets/'),

//   copyFiles([
//     'dist/stylesheets/*',
//     'vendor/bootstrap-dropmenu/dist/stylesheets/bootstrap-dropmenu.css',
//     'node_modules/open-iconic/font/css/open-iconic-bootstrap.min.css'], 'docs/stylesheets/'),

//   copyFiles(['node_modules/bootstrap/dist/js/bootstrap.min.js',
//     'node_modules/bootstrap/dist/css/bootstrap.min.css',
//     'vendor/skywalk-docs/dist/stylesheets/skywalk-docs.min.css',
//     'vendor/holderjs/holder.js',
//   ], 'docs/libs/'),

//   copyFiles([
//     'vendor/skywalk-docs/src/assets/**',
//   ], 'src/docs/assets/'),

//   copyFiles([
//     'node_modules/open-iconic/font/fonts/**',
//   ], 'src/docs/fonts/')
// ));
