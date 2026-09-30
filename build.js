const fs = require('node:fs');
const path = require('node:path');

const root = __dirname;
const publicDir = path.join(root, 'public');
const output = path.join(root, 'dist');
fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });
fs.copyFileSync(path.join(root, 'index.html'), path.join(output, 'index.html'));
fs.cpSync(publicDir, path.join(output, 'public'), { recursive: true });
fs.copyFileSync(path.join(publicDir, 'manus-routes.json'), path.join(output, 'manus-routes.json'));
console.log('Static site built in dist/ (index.html, public assets, and root route manifest).');
