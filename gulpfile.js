const gulp = require('gulp');
const shell = require('gulp-shell');

gulp.task('copy', shell.task([
        'git checkout gh-pages',
        'rm -rf ./docs',
        'mkdir docs',
        'git merge origin/master -m\'deploy\'\n',
        'npm run build',
        'cp -R ./dist/* ./docs',
        'cd ./docs',
        'ls',
        'perl -pi -w -e \'s/src=\\//src=/g\' ./docs/index.html',
        'perl -pi -w -e \'s/"\\/"/""/\' ./docs/main.js',
        'perl -pi -w -e \'s/\\/example-images\\//\\/vue-stylekit\\/example-images\\//g\' ./docs/main.js\n',
        'perl -pi -w -e \'s/\\/images\\//\\/vue-stylekit\\/images\\//g\' ./docs/main.js\n',
        'git commit -a -m\'deploy\'\n',
        'git push',
        'git checkout master'
    ])
)
