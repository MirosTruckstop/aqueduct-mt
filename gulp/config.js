/*global require, module, __dirname */
module.exports = {
	styles: {
		src: 'src/less/main.less',
		dest: 'dist/',
		basename: 'aqueduct-mt'
	},
	watch: {
		styles: 'src/less/*.less'
	}
};