const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
var tinify = require('gulp-tinify');
var jsmin = require('gulp-jsmin');

gulp.task('htmlmin', () => {
  return gulp.src('src/index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist/'));
})

gulp.task('movecss', () => {
  return gulp.src('src/css/*.css')
    .pipe(gulp.dest('dist/css/'))
})
gulp.task('movefont', () => {
  return gulp.src('src/fonts/**/*.*')
    .pipe(gulp.dest('dist/fonts/'))
})

gulp.task('tinify', function () {
  gulp.src('src/img/**/*')
    .pipe(tinify('XPkRb5vNFDXQc12s1H6NCVBY65r71nnV'))
    .pipe(gulp.dest('dist/img/'));
});
gulp.task('movejs', () => {
  return gulp.src('src/js/*.min.js')
    .pipe(gulp.dest('dist/js/'))
})
gulp.task('jsmin', function () {
  gulp.src(['src/js/*.js', '!src/js/*.min.js'])
    .pipe(jsmin())
    .pipe(gulp.dest('dist/js'));
});