module.exports = function(grunt) {
    grunt.initConfig({
        // htmlhint: {
        //     options: {
        //         htmlhintrc: './.htmlhintrc'
        //     },
        //     src: '*.html'
        // },
        // csslint: {
        //     options: {
        //         csslintrc: './.csslintrc'
        //     },
        //     src: '*.css'
        // },
        // eslint: {
        //     options: {
        //         eslintrc: './.eslintrc.json'
        //     },
        //     target: ['*.js']
        // },
        uglify: {
            release:{
              files: {
                './dist/list/list.min.js': './list/list.js',
                './dist/menu/menu.min.js': './menu/menu.js',
                './dist/wordtype/wordtype.min.js': './wordtype/wordtype.js',
                './dist/js/app.min.js':'./js/app.js',
              }
            }       
        },
        cssmin: {  
            './dist/list/list.min.css': './list/list.css',
            './dist/menu/menu.min.css': './menu/menu.css',
            './dist/wordtype/wordtype.min.css': './wordtype/wordtype.css',
            './dist/css/dlg-common.min.css':'./css/dlg-common.css',
            './dist/css/normalize.min.css':'./css/normalize.css',

          },
        htmlmin: {
            options: {
              collapseWhitespace: true,
              preserveLineBreaks: false
            },
            files: {
              src: 'index.html',
              dest: './dist/index.html'
            }
        }
        
    });
    // grunt.loadNpmTasks('grunt-htmlhint');
    // grunt.loadNpmTasks('grunt-contrib-csslint');
    // grunt.loadNpmTasks('grunt-eslint');

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.registerTask('default',['htmlmin','cssmin','uglify']);
    // grunt.registerTask('default',['htmlmin','cssmin','uglify']);
};