// 
// GRUNT TASK: CSSLint
// Checks coding standards in CSS files
// -----------------

module.exports = {
	options: {
		csslintrc: 'src/stylesheets/.csslintrc'
	},
	src: [
		'dist/stylesheets/<%= package.name %>.css'
	]
};