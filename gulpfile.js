var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    //implementation of the task
});

gulp.task('sass', function(){
    return gulp.src('scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css/'))
  });