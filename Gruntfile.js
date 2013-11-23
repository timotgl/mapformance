module.exports = function(grunt) {
    grunt.initConfig({
        less: {
          development: {
            options: {
              paths: ['css']
            },
            files: {
              'css/mapformance.css': 'css/mapformance.less'
            }
          },
          production: {
            options: {
              paths: ['css'],
              cleancss: true
            },
            files: {
              'css/mapformance.css': 'css/mapformance.less'
            }
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['less']);
};