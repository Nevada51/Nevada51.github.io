var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglifyjs'),
	del = require('del'),
	atoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function() {
	return gulp.src('src/scss/*.scss')
		.pipe(sass())
		.pipe(atoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
		.pipe(gulp.dest('src/css'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('scripts', function() {
	return gulp.src([
		'src/libs/jquery/dist/jquery.min.js'
	])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('src/js/'))
});

gulp.task('browser-sync', function() {
	browserSync({ 
		server: {
			baseDir: 'src'
		}
	});
});

gulp.task('clean', function() {
	return del.sync('tmp');
});

gulp.task('watch', ['browser-sync', 'sass', 'scripts'], function() {
	gulp.watch('src/scss/*.scss', ['sass']);
	gulp.watch('src/*.html', browserSync.reload);
	gulp.watch('src/js/**/*.js', browserSync.reload);
});

gulp.task('build', ['clean', 'sass', 'scripts'], function() {
	var buildCss = gulp.src([
		'src/css/main.css',
		'src/css/libs.css'
	])
	.pipe(gulp.dest('dist/css')); 

	var buildCss = gulp.src('src/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'));

	var buildJs = gulp.src('src/js/**/*')
		.pipe(gulp.dest('dist/js'));

	var buildHtml = gulp.src('src/*.html')
		.pipe(gulp.dest('dist'));

	var buildHtml = gulp.src('src/img')
		.pipe(gulp.dest('dist/img'));
});

gulp.task('default', ['watch']);


