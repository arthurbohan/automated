const fs = require('fs-extra');

fs.ensureDirSync('./firstFolder');

fs.ensureFileSync('./firstFolder/file.txt');

fs.ensureDirSync('./secondFolder');

fs.moveSync('./firstFolder/file.txt', './secondFolder/file.txt');

fs.removeSync('./firstFolder');

fs.removeSync('./secondFolder');