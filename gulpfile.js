var gulp = require('gulp'),
    jasmine = require('gulp-jasmine-livereload-task');

gulp.task('default', jasmine({
    files: [
        './node_modules/lodash/**/*.js',
        './dist/src/**/*.js',
        './dist/test/**/*.js'],
    watch: {
        options: {
            debounceTimeout: 1000, //The number of milliseconds to debounce. 
            debounceImmediate: true //This option when set will issue a callback on the first event. 
        }
    }
}));
