//
// GULP JS - Transpile / compiles JS
// Usage: gulp js
// -------------------

const pump = require('pump');
const babel = require('gulp-babel');
const config = require('./config.json');


function compileJS(done) {
  pump([
    gulp.src('*.js', {
      cwd: config.javascripts.sourceFolder
    }),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env']
    }),
    gulp.dest(config.javascripts.distFolder),
  ], function(err) {
    if (err) {
      log.error(err.message);
    }

    log('Finished JS compilation');
    done();
  });
}

module.exports = {
  compileJS: compileJS
}
