module.exports = function (grunt) {
    grunt.registerTask('default', [
        'clean',
        'shell:app-bower-install-dist',
        'shell:app-bootstrap-build',
        'build:app-dist',
        'copy:app-deploy-dist',
        'clean'
    ]);

    grunt.registerTask('test', [
        'clean',
        'shell:app-bower-install-dist',
        'shell:app-bootstrap-build',
        'build:app-dist',
        'copy:app-tests',
        'karma:app',
        'clean'
    ]);
};