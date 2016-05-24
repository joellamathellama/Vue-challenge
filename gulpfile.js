const fs = require('fs');
const gulp = require('gulp');
const browserify = require('browserify');
const vueify = require('vueify');

gulp.task('bundle', function() {
		browserify('./public/my-custom-form.js')
		.transform(vueify)
		.bundle()
		.pipe(fs.createWriteStream('./public/bundle.js'))
	})
