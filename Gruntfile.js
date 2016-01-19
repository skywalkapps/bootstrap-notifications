/* jshint node: true */
var path = require('path');

module.exports = function(grunt) {
  "use strict";

  // require it at the top and pass in the grunt instance
  require('time-grunt')(grunt);

  // Load the plugins
  require('load-grunt-tasks')(grunt);

  // Load grunt configuration
  require('load-grunt-config')(grunt);

  // BUILD TASKS
  // -------------------------

  // Default build task
  grunt.registerTask('default', ['clean', 'copy', 'dist-css', 'dist-js']);

  // JS tasks
  grunt.registerTask('dist-js', ['neuter', 'uglify', 'compress']);
  grunt.registerTask('dev-js', ['neuter', 'jshint']);

  // CSS tasks
  grunt.registerTask('dist-css', ['less']);
  grunt.registerTask('dev-css', ['less', 'csslint']);

  // Server task
  grunt.registerTask('server', ['connect:server', 'watch']);
};