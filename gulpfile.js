var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var coffee = require('gulp-coffee');
var es = require('event-stream');

gulp.task('coffee', function() {
    return gulp.src('src/*.coffee')
        .pipe(coffee())
        .pipe(gulp.dest('src'));
});
gulp.task('scripts', function() {
    var javaScriptFromCoffeeScript = gulp.src('src/*.coffee')
        .pipe(coffee())

    var js = gulp.src('src/*.js')
    return es.merge(javaScriptFromCoffeeScript, js)
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){

	gulp.watch('src/*.{js,coffee}', ['scripts']);
})

// var gulp = require('gulp');

// // include plug-ins
// var jshint = require('gulp-jshint');

// // JS hint task
// gulp.task('jshint', function() {
//     gulp.src('./src/scripts/*.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'));
// });
