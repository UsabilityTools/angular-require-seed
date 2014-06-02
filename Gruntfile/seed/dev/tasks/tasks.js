module.exports = function (grunt) {
    grunt.registerTask(
        'default',
        [
            'clean',
            'shell:seed',
            'sass:seed',
            'copy:seed',
            'copy:seed-deploy',
            'watch:seed'
        ]
    );

    grunt.registerTask(
        'test',
        [
            'clean',
            'shell:seed',
            'sass:seed',
            'copy:seed',
            'karma:seed'
        ]
    );
};