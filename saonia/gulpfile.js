/*
 * This file is part of the tryton themes.
 * Please see the COPYRIGHT and README.rst files at the top level of this
 * repository for full copyright notices, license terms and support
 * information.
 */
const theme_dir = '../dist/saonia/'

const { parallel, src, dest, watch } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');

function buildBootstrapCss(cb) {
    return src('sass/bootstrap/theme.scss', {sourcemaps: true})
        .pipe(sass({
            outputStyle: 'compressed',
            includePaths: [
                '../node_modules/bootstrap-sass/assets/stylesheets',
                '../common'
                ]}).on('error', sass.logError))
        .pipe(rename('bootstrap.min.css'))
        .pipe(autoprefixer())
        .pipe(cleanCss())
        .pipe(dest(
            theme_dir + 'bower_components/bootstrap/dist/css/',
            {sourcemaps: '.'}));
}

function buildCustomCss(cb) {
    return src('sass/tryton/theme.scss', {sourcemaps: true})
        .pipe(sass({
            outputStyle: 'compressed',
            includePaths: [
                '../node_modules/bootstrap-sass/assets/stylesheets',
                '../common'
                ]}).on('error', sass.logError))
        .pipe(rename('custom.css'))
        .pipe(autoprefixer())
        .pipe(cleanCss())
        .pipe(dest(theme_dir, {sourcemaps: '.'}));
}

function buildJs(cb) {
    return src('js/**/*.js', {sourcemaps: true})
        .pipe(concat('custom.js'))
        .pipe(uglify())
        .pipe(dest(theme_dir, {sourcemaps: '.'}));
}

function watchJs(cb) {
    watch(['js/**/*.js'], buildJs);
}

function watchSass(cb) {
    watch([
        'sass/**/*.scss',
        '../common/**/*.scss',
        ], parallel(buildBootstrapCss, buildCustomCss));
}

exports.default = parallel(buildBootstrapCss, buildCustomCss, buildJs);
exports.watch = parallel(watchJs, watchSass);
