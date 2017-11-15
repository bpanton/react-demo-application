
// used to transform css, jpg, and jpeg files to return path instead of source

const path = require('path');

module.exports = {
    process(src, filename, config, options) {
        return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';';
    }
};