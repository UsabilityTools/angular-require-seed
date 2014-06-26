module.exports = function (grunt) {
    grunt.registerTask(
        'default', [
            'clean',
            'shell:app-bower-install-dist',
            'shell:app-bootstrap-build',
            'build:app-dev',
            'copy:app-bootstrap-sources', // for source mapping
            'copy:app-deploy-dev',
            'clean',
            'watch'
        ]
    );

    grunt.registerTask(
        'test', [
            'clean',
            'shell:app-bower-install-dist',
            'shell:app-bootstrap-build',
            'build:app-dev',
            'copy:app-tests',
            'karma:app',
            'clean'
        ]
    );
};