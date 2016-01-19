// 
// GRUNT TASK: CSS stats
// -----------------

module.exports = {
    options: {},
    dev: {
    	files: {
      		'log/css-stats.json': ['docs/stylesheets/docs.css']
  		}
    },
    dist: {
    	files: {
      		'log/css-stats.json': ['dist/stylesheets/bootstrap-dropmenu.css']
  		}
    }
};