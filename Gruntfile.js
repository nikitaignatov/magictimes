// magictimes Gruntfile
module.exports = function (grunt) {

  'use strict';

  grunt.initConfig({
    watch: {
      files: ["app/app.js"],
      tasks: ["uglify"]
    },
    // Uglify task info. Compress the js files.
    uglify: {
      options: {
        mangle: true,
        preserveComments: 'some'
      },
      my_target: {
        files: {
          'app/app.min.js': ['app/app.js']
        }
      }
    },
    // Validate JS code
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      core: {
        src: 'app/app.js'
      },
      pages: {
        src: 'app/js/pages/*.js'
      },
      components: {
        src: 'app/js/components/*.js'
      }
    }
  });

  // Load all grunt tasks

  // Watch File Changes
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Compress JS Files
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Validate JS code
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // Delete not needed files
  grunt.loadNpmTasks('grunt-contrib-clean');
  // Linting task
  grunt.registerTask('lint', ['jshint']);

  // The default task (running "grunt" in console) is "watch"
  grunt.registerTask('default', ['watch']);
};
