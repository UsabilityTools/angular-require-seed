module.exports = function (grunt) {
    grunt.registerTask(
        'default',
        [
            'clean',
            'shell:seed',
            'sass:seed',
            'copy:seed',
            'ngAnnotate:seed',
            'requirejs:seed',
            'copy:seed-deploy'
        ]
    );

    grunt.registerTask(
        'test',
        [
            'clean',
            'shell:seed',
            'sass:seed',
            'copy:seed',
            'ngAnnotate:seed',
            'requirejs:seed',
            'karma:seed'
        ]
    );
};