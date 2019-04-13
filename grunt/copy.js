//
// GRUNT TASK: Copy
// Copies / renames all necessary files.
// -----------------

module.exports = {
  css: {
    files: [
      { expand: true, cwd: 'dist/stylesheets', src: ['*'], dest: 'docs/stylesheets' }
    ]
  },
  assets: {
    files: [
      // { expand: true, cwd: 'vendor/bootstrap/fonts', src: ['*'], dest: 'src/assets/fonts' },
      { expand: true, cwd: 'src/assets', src: ['**'], dest: 'docs/assets' }
    ]
  },
  docs: {
    files: [
      { expand: true, src: ['.gitignore'], dest: 'docs' },
      { expand: true, cwd: 'src', src: ['index.html'], dest: 'docs' },
      { expand: true, cwd: 'vendor/bootstrap-v4/dist/js', src: ['bootstrap.min.js'], dest: 'docs/libs/bootstrap' },
      { expand: true, cwd: 'vendor/skywalk-docs/dist/stylesheets', src: ['skywalk-docs.min.css'], dest: 'docs/stylesheets' },
      { expand: true, cwd: 'vendor/bootstrap-v4/dist/css', src: ['bootstrap.min.css'], dest: 'docs/stylesheets' },
      { expand: true, cwd: 'vendor/skywalk-docs/src/assets', src: ['**'], dest: 'src/docs/assets' },
      { expand: true, cwd: 'vendor/bootstrap-dropmenu/dist/stylesheets', src: ['bootstrap-dropmenu.css'], dest: 'docs/stylesheets' },
      { expand: true, cwd: 'node_modules/open-iconic/font/css/', src: ['open-iconic-bootstrap.min.css'], dest: 'docs/stylesheets' },
      { expand: true, cwd: 'node_modules/open-iconic/font/fonts/', src: ['**'], dest: 'src/docs/fonts' }
    ]
  }
};
