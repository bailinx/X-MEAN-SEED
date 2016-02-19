var gulp           = require('gulp'),
    gulpSequence   = require('gulp-sequence'),
    less           = require('gulp-less'),
    autoprefixer   = require('gulp-autoprefixer'),
    minifycss      = require('gulp-minify-css'),
    minifyHtml     = require("gulp-minify-html"),
    rimraf         = require('rimraf'),
    uplify         = require('gulp-uglify'),
    concat         = require('gulp-concat'),
    rename         = require('gulp-rename'),
    // 为服务器特别定制的，快速、灵活、实施精益(lean implementation)的jQuery核心
    cheerio        = require('gulp-cheerio');
    rjs            = require('gulp-requirejs');

var path = {
    public   : "public/",
    css      : "public/css/",
    js       : "public/js/",
    less     : "public/less/",
    img      : "public/img/",
    dist     : "dist/"
}, env = {
    production: false
};

gulp.task('set-production', function() {
    env.production = true;
});

gulp.task('replace', function() {
    var rand = new Date().getTime();
    return  gulp.src(path.dist + 'index.html')
                .pipe(cheerio(function($) {
                    $('script').remove();
                    $('link').remove();
                    $('body').append('<script data-main="js/bootstrap" src="js/require.js"></script>');
                    $('head').append('<link rel="stylesheet" href="//cdn.bootcss.com/bootstrap/4.0.0-alpha.2/css/bootstrap.css">');
                    $('head').append('<link rel="stylesheet" href="css/app.min.css?v='+ rand +'">');
                }))
                .pipe(gulp.dest(path.dist));
});

// js
gulp.task('scripts', function() {
    rjs({
        //appDir: './public/js',
        baseUrl: "./public/js",
        removeCombined: true,
        optimize: "none",
        paths: {
            'domReady': "../../public/libs/requirejs-domready/domReady",
            'angular': "../../public/libs/angular/angular",
            'uiRouter': "../../public/libs/angular-ui-router/release/angular-ui-router",
            'angularAnimate': "../../public/libs/angular-animate/angular-animate",
            'angularToastr': "../../public/libs/angular-toastr/dist/angular-toastr.tpls",
        },
        shim: {
            'angular': {
                'deps': ['domReady'],
                'exports': 'angular'
            },
            'uiRouter': {
                deps: ['angular']
            },
            'angularAnimate': {
                deps: ['angular']
            },
            'angularToastr': {
                deps: ['angular']
            }
        },
        name: "bootstrap",
        out: "bootstrap.js"
        //dir: "./public/build"
    })
    .pipe(uplify())
    .pipe(gulp.dest(path.dist + "js"));
});
// 编译less
gulp.task('css', function() {
    if(env.production) {
        return  gulp.src(path.less + '*.less')
                    .pipe(less())
                    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
                    .pipe(gulp.dest('dist/css'))
                    .pipe(minifycss())
                    .pipe(rename({ suffix: '.min'}))
                    .pipe(gulp.dest(path.dist + 'css'));
    } else {
        return  gulp.src(path.less + '*.less')
                    .pipe(less())
                    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
                    .pipe(gulp.dest(path.dist + 'css'));
    }
});
// copy
gulp.task('copy:html', function() {
    return gulp.src(['public/**/*.html', '!public/libs/**/*.html'])
        .pipe(minifyHtml())
        .pipe(gulp.dest(path.dist));
});

gulp.task('copy:libs', function() {
    return gulp.src([
        'public/libs/requirejs/require.js'
    ])
    .pipe(uplify())
    .pipe(gulp.dest(path.dist + "js"));
});

gulp.task('copy:css', function() {
    return gulp.src([path.css + "**/*.css", 'public/libs/**/*.css'])
        .pipe(concat("app.min.css"))
        .pipe(minifycss())
        .pipe(gulp.dest(path.dist + "css"));
});

gulp.task('copy:img', function() {
    return gulp.src(path.img+ "**/*.*")
        .pipe(gulp.dest(path.dist + "images"));
});

gulp.task('copy:font', function() {
    return gulp.src("public/libs/bootstrap/fonts/*.*")
        .pipe(gulp.dest(path.dist + "fonts"));
});

// clean
gulp.task('clean', function(cb) {
    return rimraf(path.dist, cb);
});

// 监听
gulp.task('watch', function() {
    return gulp.watch([
                path.less  + '**/*.*',
                path.dist + '*.html'
            ], ['css']);
});

gulp.task('default', ['watch']);
gulp.task('build', gulpSequence('set-production', 'clean', 'scripts', ['copy:html', 'copy:libs', 'copy:css', 'copy:img', 'copy:font'], 'replace'));
