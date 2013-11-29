module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ['css']
                },
                files: {
                    'css/app.css': 'css/app.less'
                }
            }
        },
    	watch: {
    		files: "css/*.less",
    		tasks: ["less"]
    	}
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['less']);
};