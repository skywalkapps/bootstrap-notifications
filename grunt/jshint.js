// 
// GRUNT TASK: JSHint
// Reads the projects .jshintrc file and applies coding standards.
// -----------------

module.exports = {
  options: {
    jshintrc: 'src/javascripts/.jshintrc'
  },
  grunt: {
    options: {
      jshintrc: '.jshintrc'
    },
    src: ['Gruntfile.js']
  },
  src: {
    src: 'src/javascripts/*.js'
  }
};