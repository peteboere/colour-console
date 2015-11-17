module.exports = (() => {

    "use strict";

    let facade = {};
    let colors = require('colors/safe');
    let wrappedMethods = {
        error: {
            prefix: 'error',
            color: 'red',
        },
        warn: {
            prefix: 'warning',
            color: 'yellow',
        },
        info: {
            prefix: 'info',
            color: 'blue',
        }
    };

    for (let member in console) {
        if (member in wrappedMethods) {
            let methodOpts = wrappedMethods[member];
            facade[member] = function () {
                let args = arguments;
                let prefix = colors[methodOpts.color].bold('[' + methodOpts.prefix + '] ');
                args[0] = colors[methodOpts.color](prefix + args[0]);
                console[member](...args);
            };
        }
        else {
            facade[member] = console[member];
        }
    }

    return facade;

})();
