// 
// GRUNT TASK: Compress
// Creates Gziped JS
// -----------------

module.exports = {
  main: {
    options: {
      mode: 'gzip'
    },
    files: [
      {expand: true, src: ['dist/javascripts/<%= package.name %>.min.js'], dest: '', ext: '.gz.js'}
    ]
  },

  release: {
    options: {
      archive: 'releases/<%= package.name %>-<%= package.version %>-dist.zip'
    },
    files: [
      {expand: true, cwd: 'dist/', src: ['**'], dest: ''}
    ]
  }
};