/*
 * This file is part of the tryton themes.
 * Please see the COPYRIGHT and README.rst files at the top level of this
 * repository for full copyright notices, license terms and support
 * information.
 */
const theme_dir = '../dist/flatly/'

const { parallel, src, dest, watch } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const concat = require('gulp-concat');
const less = require('gulp-less');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

function buildCss(cb) {
    return src('less/theme.less', {sourcemaps: true})
        .pipe(less({
            paths: [
                'less',
                '../common',
                '../node_modules/tryton-sao/src',
                '../node_modules/bootstrap',
                '../node_modules/bootstrap/less',
                '../node_modules/bootstrap-rtl-ondemand/less',
                '../node_modules/bootswatch'
                ]}))
        .pipe(rename('tryton-sao.min.css'))
        .pipe(autoprefixer())
        .pipe(cleanCss())
        .pipe(dest(theme_dir + 'dist/', {sourcemaps: '.'}));
}

function buildJs(cb) {
    return src([
            'js/**/*.js',
            '../common/js/login-dialog.js'
            ],
            {sourcemaps: true})
        .pipe(concat('custom.js'))
        .pipe(uglify())
        .pipe(dest(theme_dir, {sourcemaps: '.'}));
}

function watchCss(cb) {
    watch([
        'less/**/*.less',
        '../common/**/*.less'
        ], buildCss);
}

function watchJs(cb) {
    watch([
        'js/**/*.js',
        '../common/**/*.js'
        ], buildJs);
}

exports.default = parallel(buildCss, buildJs);
exports.watch = parallel(watchCss, watchJs);
