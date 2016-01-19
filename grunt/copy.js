// 
// GRUNT TASK: Copy
// Copies / renames all necessary files.
// -----------------

module.exports = {
  js: {
    files: [
    ]
  },
  assets: {
    files: [
      { expand: true, cwd: 'vendor/bootstrap/fonts', src: ['*'], dest: 'src/assets/fonts' },
      { expand: true, cwd: 'src/assets', src: ['**'], dest: 'docs/assets' }
    ]
  },
  docs: {
    files: [
      { expand: true, src: ['.gitignore'], dest: 'docs' },
      { expand: true, cwd: 'src', src: ['index.html'], dest: 'docs' },
      { expand: true, cwd: 'vendor/bootstrap/dist/js', src: ['bootstrap.min.js'], dest: 'docs/libs/bootstrap' },
      { expand: true, cwd: 'vendor/bootstrap-quick-search/dist/javascripts', src: ['bootstrap-quick-search.min.js'], dest: 'docs/libs' }
    ]
  }
};