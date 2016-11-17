/*global require, module, __dirname */
module.exports = {
	styles: {
		src: 'less/main.less',
		dest: 'dist/',
		basename: 'aqueduct-mt'
	},
	watch: {
		styles: 'less/*.less'
	}
};