// 
// GRUNT TASK: Neuter
// A simple ordered concatenation strategy.
// -----------------

module.exports = {
  main: {
    options: {
      // This should be achieved by basePath, but doesn't work for some reason
      filepathTransform: function(filepath){ return 'src/javascripts/' + filepath; },
      template: '{%= src %}'
    },
    dest:'docs/javascripts/docs.js',
    src: 'src/javascripts/docs.js'
  }
};