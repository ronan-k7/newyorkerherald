const http = require('http');

http.get('http://localhost:3005/', (res) => {
  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    const regex = /(href|src)="(\/_next\/[^"]+)"/g;
    let match;
    const assets = [];
    while ((match = regex.exec(html)) !== null) {
      assets.push(match[2]);
    }
    console.log('Total _next assets found in HTML:', assets.length);
    assets.forEach(assetPath => {
      http.get('http://localhost:3005' + assetPath, (assetRes) => {
        console.log(assetPath, '=>', assetRes.statusCode);
      }).on('error', err => console.error(assetPath, '=> Error:', err.message));
    });
  });
}).on('error', err => console.error('Error fetching homepage:', err.message));
