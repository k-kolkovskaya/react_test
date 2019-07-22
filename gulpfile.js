const gulp = require("gulp"),
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer");

gulp.task("sass", function () {

    return gulp
        .src("public/scss/**/*.scss")
        .pipe(sass())
        .pipe(
            autoprefixer(["last 15 versions", "> 1%", "ie 8", "ie 7"], {
                cascade: true
            })
        )
        .pipe(gulp.dest("public"))
});

gulp.task(
    "default",
    gulp.parallel("sass")
);
