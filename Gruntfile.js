module.exports = function(grunt) {
  'use strict';

  require('matchdep').filterDev('grunt-!(cli)').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    less: {
      dev: {
        options: {
          sourceMap: false
        },
        files: {
          'public/css/style.css': 'public/css/style.less'
        }
      }
    },
    watch: {
      all: {
        files: ['public/css/style.less'],
        tasks: ['less'],
      }
    }
  });

  grunt.registerTask('default', ['less', 'watch']);
};
