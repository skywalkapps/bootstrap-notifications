//
// GULP WATCH
// Watches for changes in LESS files and compiles them
//
// Usage: gulp watch, gulp serve
// -------------------

const bs = require('browser-sync').create('skywalk');
const sass = require('./sass.js');
const js = require('./script.js');
const config = require('./config.json');
const pump = require('pump');
const gulp = require('gulp');
const log = require('fancy-log');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const gulpif = require('gulp-if');
const cssnano = require('cssnano');
const rename = require('gulp-rename');


// GULP SASS - Compiles SASS into CSS
// Usage: gulp sass
// -------------------

const plugins = [
  autoprefixer({
    browsers: ['> 1%', 'last 4 versions', 'ie 11']
  }),
  cssnano()
];

sass.compiler = require('node-sass');

function compileSass(done) {
  pump([
    gulp.src('*.scss', {
      cwd: config.stylesheets.sourceFolder
    }),
    gulpif(config.stylesheets.enableSourcemaps, sourcemaps.init()),
    sass().on('error', sass.logError),
    rename(config.stylesheets.filename),
    postcss(plugins),
    gulpif(config.stylesheets.enableSourcemaps, sourcemaps.write('.', { sourceRoot: config.stylesheets.distFolder })),
    gulp.dest(config.stylesheets.distFolder),
    bs.stream(),
  ], function(err) {
    if (err) {
      log.error(err.message);
    }

    log('Finished SASS compilation');
    done();
  });
}

// BrowserSync opens browser window and reloads assets when changed
function browserSync(done) {
  browserSync.init({
    https: true,
    proxy: {
      target: './docs',
    },
    cors: true,
    open: true
  });

  done();
}

// BrowserSync - just reload
function browserSyncReload(done) {
  bs.reload();
  done();
}


// Watcher for all JS and SASS files changes
function watchAll() {
  log('Watching folder \'' + projectPath + '\'');

  gulp.watch('**/*.scss', { cwd: config.sourcePath + '/stylesheets' }, gulp.series(compileSass));
  gulp.watch('**/*.js', { cwd: config.sourcePath + '/javascripts' }, gulp.series(js.compileJS, browserSyncReload))
}


module.exports = {
  watchAll: watchAll,
  browserSync: browserSync
}
