'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var cleanCss = require('gulp-clean-css');
var browserSync = require('browser-sync');

sass.compiler = require('node-sass');


//sassというコマンドを作っている。
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(plumber({errorHandler: notify.onError(
            "Error: <%= error.message %>")}))
    .pipe(plumber())
    .pipe(gulp.dest('./css'));
});

//sass:watchというコマンドを作っている。
gulp.task('sass:watch', ['sass', 'browser-sync'], function () {
  gulp.watch('./*.html', ['bs-reload']);
  gulp.watch('./sass/**/*.scss', ['sass', 'bs-reload']);
  // 変わったらsassを実行するように指定されているので、sassを変更すれば良い
});

gulp.task('minify', function() {
  return gulp.src('./css/*.css')
  .pipe(cleanCss())
  .pipe(gulp.dest('./css'));
});

//browser-syncの作成 テンプレート
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: ".",
      index: 'index.html'
    }
  });
});

//browserSyncの中のreloadメソッドを使ってそれを呼び出すファンクションを作る。
gulp.task('bs-reload', function() {
  browserSync.reload();
});

//sass:watchで常にブラウザでリロードされるようにwatchさせたいので、sass:watchに[]に追加する


