/**
 * Created by srinivasa on 9/17/2014.
 */
module.exports = function(config){
    config.set({

        basePath : '../',

        files : [
            'app/js/**/*.js',
            'test/**/*.js'
        ],

        exclude: ['app/js/**/utils.js'],

        autoWatch : true,

        frameworks: ['jasmine'],

        browsers : ['Firefox'],

        plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        junitReporter : {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};

