const gulp = require("gulp")
const shell = require("gulp-shell")
const imagemin = require('gulp-imagemin');
gulp.task(
  "copy",
  shell.task([
    "git checkout gh-pages",
    "rm -rf ./docs",
    "mkdir docs",
    "mkdir docs/promo",
    "git merge master -m'deploy'",
    "npm run build",
    "cp -R ./dist/* ./docs",
    "cp docs/BasisGrotesquePro*.* docs/promo/",
    "cp ./static/fonts.css ./docs/",
    "ls",
    "perl -pi -w -e 's/src=\\//src=/g' ./docs/index.html",
    'perl -pi -w -e \'s/"\\/"/""/\' ./docs/main.js',
    "perl -pi -w -e 's/\\/example-images\\//\\/vue-stylekit\\/example-images\\//g' ./docs/main.js\n",
    "perl -pi -w -e 's/\\/images\\//\\/vue-stylekit\\/images\\//g' ./docs/main.js\n",
    "perl -pi -w -e 's/path:\\\"\\//path:\\\"\\/vue\\-stylekit\\/docs\\//g' ./docs/main.js\n",
    "perl -pi -w -e 's/to\\:\\\"\\//to\\:\\\"\\/vue\\-stylekit\\/docs\\//g' ./docs/main.js\n",
    "perl -pi -w -e 's/src=/src=\\/vue\\-stylekit\\/docs\\//g' ./docs/index.html",
    // "perl -pi -w -e 's/BasisGrotesqu/docs\\/BasisGrotesqu/g' ./docs/main.js",
    'perl -pi -w -e \'s/\\<\\/script\\>\\<\\/head\\>/\\<\\/script\\>\\<link rel\\=\\"stylesheet\\" href\\=\\"\\/vue\\-stylekit\\/docs\\/fonts.css\\"\\/\\>\\<\\/head\\>/g\' ./docs/index.html\n',
    "rm -rf ./dist",
    "git commit -a -m'deploy'\n",
    "git push",
    "git checkout master"
  ])
)

gulp.task(
  "image",()=>{
      gulp.src('./images/*.jpg')
        .pipe(imagemin([
          imagemin.jpegtran({
            progressive: true
          }),
          imagemin.optipng({
            optimizationLevel: 7
          })
        ]))
        .pipe(gulp.dest('dist/images/'))
  }
)
