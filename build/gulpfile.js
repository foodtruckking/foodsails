const gulp = require('gulp')
const spawn = require('child_process').spawn

gulp.task('build', function(done) {
  spawn('gulp', ['build'], {
    cwd: 'semantic/',
    stdio: 'inherit'
  }).on('close', done)
})

gulp.task('watch', function() {
  gulp.watch([
    'semantic.json',
    'semantic/src/**/*'
  ], ['build'])
})

gulp.task('default', ['build', 'watch'])
