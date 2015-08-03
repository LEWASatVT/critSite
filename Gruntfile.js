module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            react: {
                files: ['react/**/*.jsx','actions/*.js','stores/**/*.js','util/*.js'],
                tasks: ['browserify']
            }
        },

        browserify: {
            options: {
                transform: [ 'babelify' ],
		browserifyOptions: {
		    debug: false
		}
            },
            client: {
                src: ['react/**/*.jsx'],
                dest: 'public/js/browserify/bundle.js'
            }
        },
        nodemon: {
            dev: {
                script: 'bin/www',
                options:{
                    ext:'js,jsx,html,ejs',
		    nodemonOptions: {
			debug:true
		    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-nodemon');

    grunt.registerTask('default', [
        'browserify'
    ]);
};
