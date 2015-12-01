var gulp = require('gulp');
    plugins = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'gulp.*','del','browser-sync', 'browserify', 'vinyl-source-stream', 'vinyl-buffer'],
        replaceString: /\bgulp[\-.]/
    });
   
var MAIN_HTML_PATH = './app/*.html', 
  JS_SRC_PATH = "./app/src/js/**/*",
  JS_DEST_PATH = "./app/dist/js",
  CSS_SRC_PATH = "./app/src/css/**/*",
  CSS_DEST_PATH = "./app/dist/css";
/*
 default process - run "gulp"
 clears and rebuilds
 starts watcher
 */
gulp.task('default', ['browser-sync'], function(){
  console.log('here');
    gulp.start('build', 'html', 'styles', 'watch');
});

gulp.task('buildProduction',function(){
  var stream = plugins.browserify( JS_SRC_PATH ).bundle();
    stream = stream.pipe(plugins.vinylSourceStream('index.js'));
    stream = stream.pipe(plugins.vinylBuffer());
    stream = stream.pipe(gulp.dest( JS_DEST_PATH ));
    stream = stream.pipe(plugins.notify( 'Browserify Complete!' ));
    stream = stream.pipe(plugins.rename({suffix: '.min'}));
    stream = stream.pipe(plugins.notify( 'Begin minification...' ));
    stream = stream.pipe(plugins.uglify());
    stream = stream.pipe(plugins.notify('   ...minification complete!'));
    stream = stream.pipe(gulp.dest( JS_DEST_PATH ));
    stream = stream.pipe(plugins.notify('Reloading with browserSync.'));
    stream = stream.pipe(plugins.browserSync.reload({stream:true}));
    stream = stream.pipe(plugins.notify('   ...reloading with browserSync complete!'));
  return stream;
  
});
gulp.task('build',function(){
  console.log('build');
  
  
  var stream = plugins.browserify( JS_SRC_PATH ).bundle();
    stream = stream.pipe(plugins.vinylSourceStream('index.js'));
    stream = stream.pipe(plugins.vinylBuffer());
    stream = stream.pipe(gulp.dest( JS_DEST_PATH ));
    stream = stream.pipe(plugins.notify( 'Browserify Complete!' ));
    stream = stream.pipe(plugins.rename({suffix: '.min'}));
    stream = stream.pipe(gulp.dest( JS_DEST_PATH ));
    stream = stream.pipe(plugins.notify('Reloading with browserSync.'));
    stream = stream.pipe(plugins.browserSync.reload({stream:true}));
    stream = stream.pipe(plugins.notify('   ...reloading with browserSync complete!'));
  return stream;
  
});


gulp.task('bs-reload', function () {
    plugins.browserSync.reload();
});


gulp.task('browser-sync', function() {
    plugins.browserSync({
        server: {
            baseDir: "./app/"
        },
        https: true
    });
});
gulp.task('watch', function(){
    gulp.watch( JS_SRC_PATH, ['build'] );
});


/*
 clears current build
 */
gulp.task('clean', function(cb) {
    plugins.del([CSS_DEST_PATH, JS_DEST_PATH], cb);
});
/*used by watcher - reload when html changes*/
gulp.task('html', function(){
    return gulp.src( MAIN_HTML_PATH )
               .pipe(plugins.browserSync.reload({stream:true})).on('error',errorHandler);
});

/*
used by watcher - inject css updates
concatenate and minify css files
*/
gulp.task('styles', function() {
    return gulp.src(plugins.mainBowerFiles().concat([CSS_SRC_PATH]))
               .pipe(plugins.filter('*.css'))
               .pipe(plugins.concat('app.css'))
               .pipe(plugins.autoprefixer('last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
               .pipe(gulp.dest( CSS_DEST_PATH ))
               .pipe(plugins.rename({suffix: '.min'}))
               .pipe(plugins.minifyCss())
               .pipe(gulp.dest( CSS_DEST_PATH ))
               .pipe(plugins.notify({ message: 'Styles task complete' }))
               .pipe(plugins.browserSync.reload({stream:true}));
});
