/*Main build file*/

module.exports = function(grunt) {

	grunt.initConfig({

		/*Declare to centralize our paths for easy changes*/
		paths:{
				css: "res/css/",
				js: "res/js/",
				img: "res/img/",
				views: "views/"
		},

		/*This will use the less compiler to compile our less file into a css*/
		less: {
			default: {
				options: {
					compress: true,
					optimization: 2
				},

				files: {
					"<%= paths.css %>/style.css" : "<%= paths.css %>/style.less"
				}
			}
		},

		/*This is like the less task, but for javascript files*/
		uglify: {

			options: {
				banner: '/* Jquery + tippedJs + Custom script */'
			},

			default:{
				files: {
					"<%= paths.js %>/script.js" : ["<%= paths.js %>/jquery.min.js", "<%= paths.js %>/xcustom.js"]
				}
			}
		},

		/*This task monitors the files declared and executes some tasks when
		any of those files changes*/
		watch: {
			cssAndJsAndViews: {
				files: ["<%= paths.css %>/*.less","<%= paths.views %>/*.hjs", "<%= paths.js %>/script.js"],
				tasks: ['less','uglify'],
				options: {
					livereload: true
				}
			}
		},

		/*This will allow us to start the express server by issuing the command
		grunt express*/

		express: {
			dev: {
				options: {
					script: 'app.js'
				}
			}
		}


	});

	/*Load all the needed tasks*/
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-express-server');
	grunt.loadNpmTasks('grunt-contrib-uglify');


	/*The command 'grunt start' will execute the tasks 'express' and 'watch' defined above*/
	grunt.registerTask('start', ['express','watch']);
};

