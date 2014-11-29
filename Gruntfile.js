var _ = require('lodash');

var configureGrunt = function(grunt) {
  var cfg = {
    pkg: grunt.file.readJSON('package.json'),

    typescript: {
      base: {
        src: ['ts/*.ts'],
        dest: 'static/build/js/main.js',
        options: {
          module: 'amd',
          target: 'es5',
          sourceMap: true,
          declaration: true,
        },
      },
    },

    watch: {
      typescript: {
        files: ['ts/*.ts'],
        tasks: ['typescript']
      },
    },
  };

  npmTasks = [
    'grunt-contrib-watch',
    'grunt-typescript',
  ];

  _.forEach(npmTasks, function(task) {
    grunt.loadNpmTasks(task);
  });

  grunt.initConfig(cfg);
}

module.exports = configureGrunt;
