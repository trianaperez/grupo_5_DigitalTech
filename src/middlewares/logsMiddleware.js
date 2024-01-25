const fs = require('fs');
const path = require('path');

function logMiddleware(req, res, next) {
    const filePath = path.join(__dirname, '../logs/logs.txt');
    const timestamp = Date.now();
    fs.appendFileSync(filePath, `${timestamp} - ${req.url}\n`);
    next();
}
module.exports = logMiddleware;
