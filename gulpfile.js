const gulp         = require('gulp');
const notify       = require("gulp-notify");
const plumber      = require("gulp-plumber");
const sass         = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync  = require('browser-sync');

const { watch, series, task, src, dest, parallel } = require('gulp');

const paths = {
  'root'    : './app/',
  'htmlSrc' : './app/*.html',
  'cssSrc'  : './app/styles/*.scss',
  'cssDist' : './app/styles/',
  'jsSrc'   : './app/scripts/*.js'
}

// sass
task('sass', function () {
  return (
    src(paths.cssSrc)
      .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
      .pipe(sass({
        outputStyle: 'expanded'
      }))
      .pipe(autoprefixer())
      .pipe(dest(paths.cssDist))
  );
});

// browser-sync
task('browser-sync', () => {
  return browserSync.init({
    server: {
      baseDir: paths.root
    },
    reloadOnRestart: true
  });
});

// browser-sync reload
task('reload', (done) => {
  browserSync.reload();
  done();
});

// watch
task('watch', (done) => {
  watch([paths.htmlSrc], series('reload'));
  watch([paths.cssSrc], series('sass', 'reload'));
  watch([paths.jsSrc], series('reload'));
  done();
});
task('default', parallel('watch', 'browser-sync'));
