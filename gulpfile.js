"use strict";
var browserify = require( "browserify" );
var gulp = require( "gulp" );
var source = require( "vinyl-source-stream" );
var buffer = require( "vinyl-buffer" );
var gutil = require( "gulp-util" );
var uglify = require( "gulp-uglify" );
var sourcemaps = require( "gulp-sourcemaps" );
var browserSync = require( "browser-sync" ).create();
gulp.task( "js", function() {
    // Set up the browserify instance on a task basis
    var b = browserify( {
        entries: "./index.js",
        debug: true
        // Defining transforms here will avoid crashing your stream
    } );
    return b.transform("babelify", {presets: ["es2015"]})
      .bundle()
      .pipe( source( "app.js" ) )
     // .pipe(buffer())
     // .pipe(sourcemaps.init({loadMaps: true}))
          // Add transformation tasks to the pipeline here.
          //.pipe(uglify())
          .on( "error", gutil.log )
    //  .pipe(sourcemaps.write('./'))
      .pipe( gulp.dest( "./dist/js/" ) );
} );
// Create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task( "js-watch", [ "js" ], browserSync.reload );
// Use default task to launch Browsersync and watch JS files
gulp.task( "serve", [ "js" ], function() {
    // Serve files from the root of this project
    browserSync.init( {
        server: {
            baseDir: "./"
        }
    } );
    // Add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch( [ "js/**/*.js", "index.js" ], [ "js-watch" ] );
} );
