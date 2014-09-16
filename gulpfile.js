var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./app/styles/*.scss')
    .pipe(sass({
      sourceComments: 'map',
      sourceMap: 'sass',
      style: 'compact'
    }))
    .pipe(gulp.dest('./app/public/css'));
});