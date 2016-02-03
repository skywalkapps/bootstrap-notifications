//
// GRUNT TASK: DSS
// Documentation
// -----------------

module.exports = {
  docs: {
    files: {
      'api/': 'src/stylesheets/**/*.less'
    },
    options: {
      template: 'src/dss/',
      parsers: {
        // Finds @author
        author: function(i, line, block){
          return line;
        }
      }
    }
  }
};
