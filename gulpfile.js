var gulp = require('gulp');
var _    = require('lodash');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('copy-assets', function() {
    var assets = {
        js: [
            './node_modules/bootstrap/dist/js/bootstrap.min.js',
            './node_modules/jquery/dist/jquery.min.js'
        ],
        css: [
            './node_modules/bootstrap/dist/css/bootstrap.min.css',
            './node_modules/font-awesome/css/font-awesome.min.css'
        ],
        fonts: ['./node_modules/font-awesome/fonts/*']
    };
    _(assets).forEach(function (assets, type) {
       gulp.src(assets).pipe(gulp.dest('./static/'+type));
    });
});
