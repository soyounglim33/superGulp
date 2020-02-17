import gulp from "gulp";
import gpug from "gulp-pug";
import del from "del";
import ws from "gulp-webserver";

const routes = {
  pug: {
    src: "src/*.pug",
    dest: "build"
  }
};

const pug = () => 
  gulp.src(routes.pug.src).pipe(gpug()).pipe(gulp.dest(routes.pug.dest)); 

const clean = () => del(["build"]);

const webserver = () => gulp.src("build").pipe(ws({livereload: true}));

const prepare = gulp.series([clean]);

const assets = gulp.series([pug]);

export const dev = gulp.series([prepare, assets]);

