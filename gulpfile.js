const gulp = require("gulp");
const shell = require("gulp-shell");
const imagemin = require("gulp-imagemin");
var tiny = require("gulp-tinypng-nokey-plus");
gulp.task(
  "copy",
  shell.task([
    "git checkout gh-pages",
    "rm -rf ./docs",
    "mkdir docs",
    "mkdir docs/promo",
    "git merge master -m'update branch'",
    "npm run build:docs",
    "cp -R ./dist/* ./docs",
    "cp docs/RostelecomBasis*.* docs/promo/",
    "cp ./static/fonts.css ./docs/",
    "ls",
    "perl -pi -w -e 's/src=\\//src=/g' ./docs/index.html",
    'perl -pi -w -e \'s/"\\/"/""/\' ./docs/main.js',
    "perl -pi -w -e 's/\\/static\\/example-images\\//\\/vue-stylekit\\/static\\/example-images\\//g' ./docs/main.js\n",
    "perl -pi -w -e 's/\\/static\\/images\\//\\/vue-stylekit\\/static\\/images\\//g' ./docs/main.js\n",
    "perl -pi -w -e 's/path:\\\"\\//path:\\\"\\/vue\\-stylekit\\/docs\\//g' ./docs/main.js\n",
    "perl -pi -w -e 's/to\\:\\\"\\//to\\:\\\"\\/vue\\-stylekit\\/docs\\//g' ./docs/main.js\n",
    "perl -pi -w -e 's/src=/src=\\/vue\\-stylekit\\/docs\\//g' ./docs/index.html",
    "perl -pi -w -e 's/vue-stylekit\\/docs\\/vue-stylekit\\/static\\/images/vue-stylekit\\/static\\/images/g' ./docs/main.js\n",
    // "perl -pi -w -e 's/BasisGrotesqu/docs\\/BasisGrotesqu/g' ./docs/main.js",
    'perl -pi -w -e \'s/\\<\\/script\\>\\<\\/head\\>/\\<\\/script\\>\\<link rel\\=\\"stylesheet\\" href\\=\\"\\/vue\\-stylekit\\/docs\\/fonts.css\\"\\/\\>\\<\\/head\\>/g\' ./docs/index.html\n',
    "rm -rf ./dist",
    "git commit -a -m'deploy docs'\n",
    "git push",
    "git checkout master"
  ])
);
// todo need to update this tasks for gulp 4
// gulp.task("start", shell.task(["npm start"]));
//
// gulp.task("deploy", ["copy", "start"]);
//
// gulp.task("image", () => {
//   gulp
//     .src("./newImages/*")
//     .pipe(
//       imagemin([
//         imagemin.jpegtran({
//           progressive: true
//         }),
//         imagemin.optipng({
//           optimizationLevel: 5,
//           progressive: true,
//           interlaced: true,
//           multipass: true
//         })
//       ])
//     )
//     .pipe(gulp.dest("tmpImages/"));
// });
//
// gulp.task("imageTiny", () => {
//   gulp
//     .src("./tmpImages/*")
//     .pipe(tiny())
//     .pipe(gulp.dest("./dist/"));
// });
//
// gulp.task("optimize", ["image", "imageTiny"]);
