// 
// GRUNT TASK: Connect
// grunt-connect will start static webserver
// -----------------

module.exports = {
  server: {
    options: {
      port: 8888,
      base: './docs',
      open: true,
      livereload: true
    }
  }
};