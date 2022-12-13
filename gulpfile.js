const gulp = require('gulp');
const browserSync = require('browser-sync');

// Configuration object to store the compile and server details

const Config =  {
    bsSetup: {
        reloadList: [
            'app/**/*.html',
            // 'app/src/css/**/*.css',
            'app/src/javascript/**/*.js'
        ],
        init: {
            port: 3000,
            server: { baseDir: './app' },
            files: [
                'app/src/**/*',
                'app/assets/**/*'
            ]
        }
    }
};

// Functions to compile the files and run the server

const bs = () =>
    browserSync
        .init(Config.bsSetup.init);

const dev = () => {
    bs();
    Config.bsSetup.reloadList.forEach(file => {
        gulp.watch(file)
            .on('change', browserSync.reload);
    });
};

// Exported gulp commands

exports.dev = dev;
