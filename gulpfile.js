//REQUIRES
var gulp          = require('gulp'), 
    autoprefixer  = require('gulp-autoprefixer'), 
    sass          = require('gulp-sass'), 
    sourcemaps    = require('gulp-sourcemaps'), 
    imagemin      = require('gulp-imagemin'), 
    beautifycss   = require('gulp-cssbeautify'), 
    uglify        = require('gulp-uglify'), 
    htmlclean     = require('gulp-htmlclean'), 
    gutil         = require('gulp-util'), 
    rename        = require('gulp-rename'),
    plumber       = require('gulp-plumber'),
    cssmin        = require('gulp-cssmin');


//PATHS FILES
var paths = {
	src: {
		html: 'assets/html/**/*',
		sass: 'assets/scss/**/*.scss',
		js: 'assets/js/**/*.js',
		img: 'assets/images/**/*'
	},
	dest: {
		html: '',
		sass: 'css',
		js: 'js',
		img: 'images',
		beauty: {
		  sass: 'css/beauty',
		}
	}
};


//TASKS
gulp.task('html', function(){
  gulp.src( paths.src.html )
    .pipe(htmlclean())
    .pipe(gulp.dest( paths.dest.html ));
});

gulp.task('sass', function(){
 gulp.src(paths.src.sass)
     .pipe(plumber())
     .pipe(sass())
     .pipe(autoprefixer({
      browsers: ['last 30 versions'],
      cascade: false
    }))
     .pipe(rename({
      extname: ".min.css"
     }))
     .pipe(cssmin())
     .pipe(plumber.stop())
     .pipe(gulp.dest(paths.dest.sass))
     .pipe(beautifycss())
     .pipe(gulp.dest(paths.dest.beauty.sass));
});

gulp.task('js', function(){
  gulp.src(paths.src.js)
    .pipe(sourcemaps.init())
    .pipe(uglify().on('error', gutil.log))
    .pipe(sourcemaps.write())
    .pipe(rename(function(file){
      file.extname = ".min.js";
    }))
    .pipe(gulp.dest(paths.dest.js));
});

gulp.task('imagemin', function(){
  gulp.src( paths.src.img )
    .pipe(imagemin())
    .pipe(gulp.dest( paths.dest.img ));
});

//WATCH
gulp.task('watch', function(){
  gulp.watch(paths.src.html, ['html']);
  gulp.watch(paths.src.sass, ['sass']);
  gulp.watch(paths.src.js, ['js']);
  gulp.watch(paths.src.img, ['imagemin']);
});

gulp.task('default', ['html', 'sass', 'js', 'imagemin', 'watch']);