var os = require('os'),
    OSinfo = require('OSinfo'),
    timeFormat = require('timeFormat'),
    eventEmitter = require('eventEmitter');
    
// SET ENCODING UTF-8
process.stdin.setEncoding('utf-8');


process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !==null) {
        var instruction = input.trim();
        switch(instruction) {
            case '/exit':
                process.stdout.write('Quitting app\n');
                process.exit();
                break;
            case '/sayhello':
                process.stdout.write('hello!\n');
                break;
            case '/getOSinfo':
                var OSinfo = require('./modules/OSinfo');
                OSinfo.print();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        };
    } else {
        eventEmitter.print();
    };
    console.log(process.versions); 
});
