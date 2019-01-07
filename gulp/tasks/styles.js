/*global require, module, __dirname */
var config = require('../config').styles,
	path = require('path'),
	gulp = require('gulp'),
	less = require('gulp-less'),
	rename = require('gulp-rename'),
	cleanCss = require('gulp-clean-css'),
	util = require('gulp-util'),
	notify = require('gulp-notify');

gulp.task('styles', function () {
	return gulp.src(config.src)
		.pipe(less({
			paths: [ path.join(__dirname, 'less', 'includes') ]
		}))
		.on('error', handleError)
		.pipe(rename({
			basename: config.basename,
			suffix: '.min'
		}))
		.pipe(cleanCss({compatibility: 'ie8'}))
		.pipe(gulp.dest(config.dest))
		;
});

var handleError = function (err) {
	new util.log(err);
	notify.onError({
		title: err.plugin+' error',
		message: path.basename(err.filename)+" on line "+err.line+":"+err.column,
		sound: false
	})(err);
	this.emit('end');
};