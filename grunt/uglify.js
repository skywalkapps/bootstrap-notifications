//
// GRUNT TASK: Uglify
// Minifies compiled javascript
// -----------------

module.exports = {
    options: {
      mangle: false
    },
    my_target: {
      files: {
        'docs/javascripts/docs.min.js': ['docs/javascripts/docs.js']
      }
    }
};
