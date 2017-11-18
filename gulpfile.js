/**
 * Gulp file created for the purpose of compilling d.ts files.
 * It's open to be edited but shouldn't be edited unless you know what you doing
 * 
 * @author Nio Kasgami 
 * @license MIT
 */


const gulp = require("gulp");
const concat = require("gulp-concat");

gulp.task("default",["build"]);

/**
 * Gulp task for concat the constants and move it to the dist folder.
 */
gulp.task("concatConstant", () => {
    gulp.src("./Constants/**/*.d.ts")
        .pipe(concat("Constants.d.ts"))
        .pipe(gulp.dest("./dist"));
});

/**
 * Will concat the engines files and move them to the dist folder.
 */
gulp.task("concatEngine", () => {
    gulp.src("./Engine/**/*.d.ts")
        .pipe(concat("Engine.d.ts"))
        .pipe(gulp.dest("./dist"));
});

/**
 * Build the whole files and send them to the dest folder it's also the default gulp task.
 */
gulp.task("Build");
