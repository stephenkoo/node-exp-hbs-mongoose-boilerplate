var gulp         = require('gulp'),
	browserSync  = require('browser-sync').create(),
	autoprefixer = require('gulp-autoprefixer'),
	sass         = require('gulp-sass');

var paths = {
		cssSrc: 'src/assets/styles/',
		cssDest: 'src/public/css/',
		htmlSrc: 'src/views/',
	sass: [ 
		'node_modules/foundation-sites/scss'
		// 'node_modules/foundation-sites/scss',
		// 'node_modules/motion-ui/src'
	]
};

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function(){
	return gulp.src(paths.cssSrc + '*.scss')
		.pipe(sass({
				includePaths: paths.sass,
				outputStyle: 'compressed'
		})
			.on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 1 versions']
		}))
		.pipe(gulp.dest(paths.cssDest))
		.pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('watch', function(){
	browserSync.init({
		server: "./src"
	});
	gulp.watch(paths.cssSrc + '*.scss', ['sass']);
	gulp.watch(paths.htmlSrc + '**/*.hbs').on('change', browserSync.reload);
});

gulp.task('default', ['sass', 'watch']);