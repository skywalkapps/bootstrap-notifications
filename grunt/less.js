//
// GRUNT TASK: Less
// Builds LESS styles into CSS
// -----------------

var banner = '/*!\n' +
          ' * <%= package.name %> v<%= package.version %> (<%= package.homepage %>)\n' +
          ' * Copyright <%= grunt.template.today("yyyy") %> <%= package.author %>\n' +
          ' * Licensed under <%= package.license %>\n' +
          ' */\n';


module.exports = {
  dev: {
    options: {
      banner: banner,
    },
    files: {
      'dist/stylesheets/<%= package.name %>.css': 'src/stylesheets/index.less'
    }
  },

  dist: {
    options: {
      compress: true
    },
    files: {
      'dist/stylesheets/<%= package.name %>.min.css': 'dist/stylesheets/<%= package.name %>.css'
    }
  }
};
