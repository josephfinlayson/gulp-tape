/*jshint asi:true*/
'use strict';
var util = require('tape'),
    tape = require('tape'),
    tapeRunner = require.resolve('tape/bin/tape'),
    spawn = require('child_process').spawn,
    through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var path = require('path'),
    spec = require('tap-spec')



var passthrough = function() {

    // creating a stream through which each file will pass
    var stream = through.obj(function(file, enc, cb) {


        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        if (file.isBuffer()) {
            var self = this
            if (typeof file.path !== 'undefined') {
                var runner = spawn(tapeRunner, [file.path])
                    .on('close', function errorHandler(error) {
                        console.log(error.toString());
                        self.push(file);
                        cb();
                    })

                return runner.stdout
                    .pipe(spec())
                    .pipe(process.stdout)
            }

        }

    });

    // returning the file stream
    return stream;
};


module.exports = passthrough;
