//
// GULP SASS
// Compiles SASS styles to output CSS

// Usage: gulp sass
// -------------------

const gulp = require('gulp');

const pump = require('pump');
const log = require('fancy-log');
const config = require('./config.json');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const gulpif = require('gulp-if');
const cssnano = require('cssnano');
const sass = require('gulp-sass');
const rename = require('gulp-rename');

const plugins = [
  autoprefixer({
    browsers: ['> 1%', 'last 4 versions', 'ie 11']
  }),
  cssnano()
];

// GULP SASS - Compiles SASS into CSS
// Usage: gulp sass
// -------------------

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
  ], function(err) {
    if (err) {
      log.error(err.message);
    }

    log('Finished SASS compilation');
    done();
  });
}


module.exports = {
  compileSass: compileSass
}
