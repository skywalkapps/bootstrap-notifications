const browserSync  = require('browser-sync' ).create();

const gulp = require('gulp');
const pump = require('pump');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const babel = require('gulp-babel');

const sourcemaps = require('gulp-sourcemaps');

const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const rename = require('gulp-rename');
const log = require('fancy-log');
const clean = require('gulp-clean');
const copy = require('gulp-copy');
const config = require('./config.json');

// GULP CLEAN - Remove contents of distribution folder
// Usage: gulp clean
// -------------------

gulp.task('clean', (cb) => {
  pump([
    gulp.src('dist/**/*', { read: false }),
    clean()
  ], cb);
});

// GULP COPY -
// Usage: gulp clean
// -------------------

const copyFiles = (source, dest) => {
  return (cb) => { gulp.src(source).pipe(gulp.dest(dest)); cb(); };
};

gulp.task('copy', gulp.series(
  copyFiles(['src/assets/**/*'], 'docs/assets/'),

  copyFiles([
    'dist/stylesheets/*',
    'vendor/bootstrap-dropmenu/dist/stylesheets/bootstrap-dropmenu.css',
    'node_modules/open-iconic/font/css/open-iconic-bootstrap.min.css'], 'docs/stylesheets/'),

  copyFiles(['node_modules/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
    'vendor/skywalk-docs/dist/stylesheets/skywalk-docs.min.css',
    'vendor/holderjs/holder.js',
  ], 'docs/libs/'),

  copyFiles([
    'vendor/skywalk-docs/src/assets/**',
  ], 'src/docs/assets/'),

  copyFiles([
    'node_modules/open-iconic/font/fonts/**',
  ], 'src/docs/fonts/')
));


// GULP JS - Transpile / compiles JS
// Usage: gulp js
// -------------------

gulp.task('js:compile', (cb) => {
  pump([
    gulp.src('*.js', {
      cwd: config.javascripts.sourceFolder
    }),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env']
    }),
    gulp.dest(config.javascripts.distFolder),
  ], cb);
});

// GULP SASS - Compiles SASS into CSS
// Usage: gulp sass
// -------------------

sass.compiler = require('node-sass');

const plugins = [
  autoprefixer({
    browsers: ['> 1%', 'last 4 versions', 'ie 11']
  }),
  cssnano()
];

gulp.task('sass:compile', (cb) => {
  pump([
    gulp.src('*.scss', {
      cwd: config.stylesheets.sourceFolder
    }),
    sourcemaps.init(),
    sass().on('error', sass.logError),
    rename(config.stylesheets.filename),
    postcss(plugins),
    sourcemaps.write('.', { sourceRoot: config.stylesheets.distFolder }),
    gulp.dest(config.stylesheets.distFolder),
    browserSync.stream(),
  ], cb);
});


//
// GULP WATCH - Watches for changes in LESS files and compiles them
// Usage: gulp watch
// -------------------
gulp.task('watch', () => {
  log('Watching folder');

  const styleTask = gulp.watch('**/*.scss', { cwd: config.sourcePath + '/stylesheets' })
    .on('change', function(e) {
      //lintStyleLess(e.path);
      console.log("css changed");
    });

  const jsTask = gulp.watch('**/*.js', { cwd: config.sourcePath + '/javascripts' })
    .on('change', function(e) {
      console.log("js changed");
      //lintJS(e.path);
    })
    .on('add', function(e) {
      //lintJS(e.path);
    });

});

//
// GULP SERVE
// Usage: gulp serve
// -------------------
gulp.task('server', () => {
  log('Serving project:  \'' + projectName + '\'');

  browserSync.init({
    https: true,
    proxy: {
      target: './docs',
    },
    cors: true,
    open: true
  });

  const watcherLESS = gulp.watch('**/*.scss', { cwd: config.sourcePath + '/stylesheets' }, ['sass'])
    .on('change', function(e) {
      //lintLess(e.path);
    });

  const watcherJS = gulp.watch('**/*.js', { cwd: config.sourcePath + '/javascripts' }, function() {
      browserSync.reload();
    })
    .on('change', function(e) {
      //lintJS(e.path);
    });
});

// Aliases
gulp.task('js', gulp.series('js:compile'));
gulp.task('css', gulp.series('sass:compile'));
gulp.task('serve', gulp.series('server'));
gulp.task('build', gulp.series('clean', 'js:compile', 'sass:compile'));
