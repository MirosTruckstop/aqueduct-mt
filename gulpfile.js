/*global require, module, __dirname */
var gulp = require('gulp'),
	cleanCss = require('gulp-clean-css'),
	less = require('gulp-less'),
	rename = require('gulp-rename'),
	path = require('path');

gulp.task('default', ['styles', 'watch']);

gulp.task('watch', function () {
	gulp.watch('src/less/*.less', ['styles']);
});

gulp.task('styles', function () {
	return gulp.src('src/less/main.less')
		.pipe(less({
			paths: [ path.join(__dirname, 'less', 'includes') ]
		}))
		.pipe(rename({
			basename: 'aqueduct-mt',
			suffix: '.min'
		}))
		.pipe(cleanCss({compatibility: 'ie8'}))
		.pipe(gulp.dest('dist/'))
		;
});
