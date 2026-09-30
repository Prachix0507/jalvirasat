const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const root = __dirname;
const publicRoot = path.join(root, 'public');
const port = Number(process.env.PORT || 3000);
const types = {
  '.html': 'text/html; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
};

const server = http.createServer((req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { 'content-type': 'text/plain; charset=utf-8', allow: 'GET, HEAD' });
    return res.end('Method not allowed');
  }

  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url || '/', 'http://localhost').pathname);
  } catch {
    res.writeHead(400, { 'content-type': 'text/plain; charset=utf-8' });
    return res.end('Bad request');
  }

  let file;
  if (pathname === '/') {
    file = path.join(root, 'index.html');
  } else if (pathname === '/manus-routes.json') {
    file = path.join(publicRoot, 'manus-routes.json');
  } else if (pathname.startsWith('/public/')) {
    file = path.resolve(publicRoot, pathname.slice('/public/'.length));
    if (!file.startsWith(`${publicRoot}${path.sep}`)) {
      res.writeHead(403, { 'content-type': 'text/plain; charset=utf-8' });
      return res.end('Forbidden');
    }
  } else {
    res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
    return res.end('Not found');
  }

  fs.readFile(file, (error, content) => {
    if (error) {
      res.writeHead(error.code === 'ENOENT' ? 404 : 500, { 'content-type': 'text/plain; charset=utf-8' });
      return res.end(error.code === 'ENOENT' ? 'Not found' : 'Server error');
    }
    res.writeHead(200, {
      'content-type': types[path.extname(file).toLowerCase()] || 'application/octet-stream',
      'cache-control': 'no-store',
      'x-content-type-options': 'nosniff',
    });
    res.end(req.method === 'HEAD' ? undefined : content);
  });
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Jal Virasat preview server listening on 0.0.0.0:${port}`);
});
