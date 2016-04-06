'use strict';
let path = require('path');
let gulp = require('gulp');
let conf = require('./conf');
let git = require('gulp-git');

let $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

gulp.task('html', ['inject'], function () {
    let htmlFilter = $.filter('*.html');
    let jsFilter = $.filter('**/*.js');
    let cssFilter = $.filter('**/*.css');
    let assets;

    return gulp.src(path.join(conf.paths.tmp, '/serve/*.html'))
        .pipe(assets = $.useref.assets())
        .pipe($.rev())
        .pipe(jsFilter)
        .pipe($.uglify({preserveComments: $.uglifySaveLicense})).on('error', conf.errorHandler('Uglify'))
        .pipe(jsFilter.restore())
        .pipe(cssFilter)
        .pipe($.replace('../../bower_components/bootstrap-sass-official/assets/fonts/bootstrap/', '../fonts/'))
        .pipe($.csso())
        .pipe(cssFilter.restore())
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe($.revReplace())
        .pipe(htmlFilter)
        .pipe($.minifyHtml({
            empty: true,
            spare: true,
            quotes: true,
            conditionals: true
        }))
        .pipe(htmlFilter.restore())
        .pipe(gulp.dest(path.join(conf.paths.dist, '/')))
        .pipe($.size({title: path.join(conf.paths.dist, '/'), showFiles: true}));
});

// Only applies for fonts from bower dependencies
// Custom fonts are handled by the "other" task
gulp.task('fonts', function () {
    return gulp.src($.mainBowerFiles())
        .pipe($.filter('**/*.{eot,svg,ttf,woff,woff2}'))
        .pipe($.flatten())
        .pipe(gulp.dest(path.join(conf.paths.dist, '/fonts/')));
});

gulp.task('other', function () {
    let fileFilter = $.filter(function (file) {
        return file.stat.isFile();
    });

    return gulp.src([
            path.join(conf.paths.src, '/**/*'),
            path.join('!' + conf.paths.app, '/**/*.*'),
            path.join('!' + conf.paths.src, '/**/*.{html,css,scss}')
        ])
        .pipe(fileFilter)
        .pipe(gulp.dest(path.join(conf.paths.dist, '/')));
});

gulp.task('clean', function (done) {
    $.del(conf.cleanDist.concat([path.join(conf.paths.tmp, '/')]), {force: true}, done);
});

gulp.task('git-build-add', ['build-after-clean'], function () {
    return gulp.src(conf.cleanDist)
        .pipe(git.add());
});

gulp.task('build-after-clean', ['html', 'fonts', 'other']);

gulp.task('build', ['clean'], function () {
    //gulp.start('git-build-add');
});