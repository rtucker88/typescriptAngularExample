var gulp = require('gulp');
var concat = require('gulp-concat');
var ts = require('gulp-typescript');
var eventStream = require('event-stream');

gulp.task('default', [], function() {
    var tsResult = gulp.src(['public/*.ts', 'typings/*.d.ts', 'typings/**/*.d.ts'])
        .pipe(ts({
            declarationFiles: true,
            noExternalResolve: true
        }));

    return eventStream.merge(
        tsResult.dts.pipe(gulp.dest('release/definitions')),
        tsResult.js
            .pipe(concat('app.js'))
            .pipe(gulp.dest('release/js'))
    );
});