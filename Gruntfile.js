module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      my_target: {
        files: {
          'js/dist/output.min.js': ['js/src/*.js']
        }
      }
    },
    copy:{
      main: {
        files: [{
            expand: true,
            src: ['node_modules/bootstrap/dist/js/bootstrap.min.js'],
            dest: 'js/dist',
            flatten: true,
            filter: 'isFile'
          },
          {
            expand: true,
            src: ['node_modules/vue/dist/vue.min.js'],
            dest: 'js/dist',
            flatten: true,
            filter: 'isFile'
          },
          {
            expand: true,
            src: ['node_modules/bootstrap/dist/css/bootstrap.min.css'],
            dest: 'css',
            flatten: true,
            filter: 'isFile'
          },
          {
            expand: true,
            src: ['node_modules/font-awesome/css/*'],
            dest: 'css',
            flatten: true,
            filter: 'isFile'
          },
          {
            expand: true,
            src: ['node_modules/font-awesome/fonts/*'],
            dest: 'fonts/',
            flatten: true,
            filter: 'isFile'
          }
        ],
      },
    },
    watch: {
      files: ['js/src/*.js'],
      tasks: ['uglify']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['uglify', 'copy']);

};
