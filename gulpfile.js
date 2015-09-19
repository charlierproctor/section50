var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var using = require('gulp-using')
var sass = require('gulp-sass')
var bowerFiles = require('main-bower-files')
var angularFilesort = require('gulp-angular-filesort');
var minifyHTML = require('gulp-minify-html')
var gulpif = require('gulp-if')
var minimist = require('minimist');
var del = require('del')
var bower = require('gulp-bower');
var shell = require('gulp-shell')

var knownOptions = {
  string: 'env',
  default: { env: process.env.NODE_ENV || 'production' }
};

var options = minimist(process.argv.slice(2), knownOptions);

var paths = {
  html: [
  	'src/**/*.html',
  	'!src/bower_components/**/*.html'
  ],
  sass: [
  	'src/css/*.scss'
  ],
  img: [
  	'src/img/**/*'
  ],
  scripts: [
  'src/**/*.js',
  '!src/bower_components/**/*.js'
  ],
  libs: [
  'src/bower_components/ace-builds/src-min-noconflict/ace.js',
  'src/bower_components/ace-builds/src-min-noconflict/mode-c_cpp.js'
  ]
};

gulp.task('bower', function() {
  return bower()
})
gulp.task('clean', function(cb) {
  del([
    'dist/'
  ], cb)
})
gulp.task('html', ['bower','clean'], function() {
	return gulp.src(paths.html)
	.pipe(gulpif(options.env === 'development', using()))
	.pipe(gulpif(options.env === 'production', minifyHTML({empty:true})))
	.pipe(gulp.dest('dist'))
})
gulp.task('sass', ['bower','clean'], function() {
	return gulp.src(paths.sass)
  .pipe(gulpif(options.env === 'development', using()))
	.pipe(gulpif(options.env === 'production', sass({outputStyle: 'compressed'})))
  .pipe(gulpif(options.env === 'development', sass()))
	.pipe(gulp.dest('dist'))
})
gulp.task('img', ['bower','clean'], function() {
	return gulp.src(paths.img)
  .pipe(gulpif(options.env === 'development', using()))
	.pipe(gulp.dest('dist/img'))
})
gulp.task('vendor', ['bower','clean'], function() {
	return gulp.src(bowerFiles().concat(paths.libs))
	.pipe(gulpif(options.env === 'development', using()))
	.pipe(concat('lib.js'))
	.pipe(gulpif(options.env === 'production', uglify()))
	.pipe(gulp.dest('dist'));
})
gulp.task('scripts', ['bower','clean'], function() {
  return gulp.src(paths.scripts)
  	.pipe(angularFilesort())
  	.pipe(gulpif(options.env === 'development', using()))
  	.pipe(concat('app.js'))
    .pipe(gulpif(options.env === 'production', uglify()))
    .pipe(gulp.dest('dist'));
});

gulp.task('all', ['html','sass','img','vendor','scripts'])
gulp.task('default', ['all']);

gulp.task('watch', ['all'], function() {
  var all = paths.html.concat(paths.sass).concat(paths.img).concat(paths.scripts)
  gulp.watch(all, ['all']);
});