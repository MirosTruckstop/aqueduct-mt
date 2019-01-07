'use strict';

const cleanCss = require('gulp-clean-css');
const gulp = require('gulp');
const less = require('gulp-less');
const rename = require('gulp-rename');
const path = require('path');

function styles() {
	return gulp
		.src('src/less/main.less')
		.pipe(less({
			paths: [ path.join(__dirname, 'less', 'includes') ]
		}))
		.pipe(rename({basename: 'aqueduct-mt', suffix: '.min'}))
		.pipe(cleanCss({compatibility: 'ie8'}))
		.pipe(gulp.dest('dist/'))
		;
}

function watch() {
	gulp.watch('src/less/*.less', styles);
}

exports.styles = styles;
exports.watch = watch;
exports.default = gulp.series(styles, watch);
