module.exports = {
    removeDefine: {
        options: {
            placeholder: '<%= script =>',
            wrapper: '(function() { var define = null; <%= script => })();'
        },
        files: [
            {
                src: '<%= conf.target %>/player.js',
                dest: '<%= conf.target %>/player.js'
            }
        ]
    },
    replaceGlobals: {
        options: {
            wrapper: '<%= conf.appPath %>/<%= conf.appName%>/scripts/wrappers/replace-globals.js'
        },
        files: [
            {
                src: '<%= conf.target %>/tracker.js',
                dest: '<%= conf.target %>/tracker.js'
            },
            {
                src: '<%= conf.target %>/tester.js',
                dest: '<%= conf.target %>/tester.js'
            }
        ]
    },
    appendConfig: {
        options: {
            wrapper: '<%= conf.appPath %>/<%= conf.appName%>/scripts/wrappers/append-config.js'
        },
        files: [
            {
                src: '<%= conf.target %>/tracker.js',
                dest: '<%= conf.target %>/tracker.js'
            }
        ]
    }
};