/*global require, module, __dirname */
var config = require('../config').styles,
	path = require('path'),
	gulp = require('gulp'),
	less = require('gulp-less'),
	rename = require('gulp-rename'),
	cleanCss = require('gulp-clean-css');

gulp.task('styles', function () {
	return gulp.src(config.src)
		.pipe(less({
			paths: [ path.join(__dirname, 'less', 'includes') ]
		}))
		.pipe(rename({
			basename: config.basename,
			suffix: '.min'
		}))
		.pipe(cleanCss({compatibility: 'ie8'}))
		.pipe(gulp.dest(config.dest))
		;
});
