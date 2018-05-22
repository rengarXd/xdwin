const gulp = require("gulp");
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const watchify = require('watchify');
const gutil = require("gulp-util");
const tsify = require("tsify");
const buffer = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps');


const paths = {
    pages: ['src/*.html']
};
// const ts = require("gulp-typescript");
// const tsProject = ts.createProject("tsconfig.json");

const watchedBrowserify = watchify(browserify({
        basedir: '.',
        debug: true,
        entries: ['src/main.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .transform('babelify', {
        presets: ['es2015'],
        extensions: ['.ts']
    }))


gulp.task("copy-html", function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
});

function bundle() {
    // return watchedBrowserify.bundle().pipe(source('bundle.js')).pipe(gulp.dest("dist"))
    return watchedBrowserify.bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'))
}

gulp.task("default", ["copy-html"],bundle);

watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", gutil.log);