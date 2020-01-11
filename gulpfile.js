const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const less = require('gulp-less');
const browserSync = require('browser-sync').create();
const gcmq = require('gulp-group-css-media-queries');

const config = {
    root: './src/',
    html: {
        src: 'index.html'
    },
    css: {
        watch: 'less/**/*.less',
        src: 'less/+(styles).less',
        dest: 'css'
    }
};

gulp.task('build', function () {
    gulp.src(config.root + config.css.src)
        .pipe(less())
        .pipe(gcmq())
        .pipe(autoprefixer({
            browsers: ['> 0.1%'],
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(gulp.dest(config.root + config.css.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch',['browserSync'], function() {
    gulp.watch(config.root + config.css.watch, ['build']);
    gulp.watch(config.root + config.html.src, browserSync.reload);
});

gulp.task('browserSync', function() {
   browserSync.init({
      server: {
          baseDir: config.root
      } 
   }); 
});

const smartgrid = require('smart-grid');

gulp.task('grid', function() {
   smartgrid('src/less', {
       offset: '30px',
       container: {
           maxWidth: '1140px',
           fields: '0px'
       },
       breakPoints: {
        lg: {
            width: '1140px', /* -> @media (max-width: 1100px) */
            fields: '15px'
        },
        md: {
            width: '960px'
        },
        sm: {
            width: '780px',
        },
        xs: {
            width: '560px'
        }
    }
   });
});