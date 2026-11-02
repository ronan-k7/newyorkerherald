const fs = require('fs');
const path = require('path');

const candidates = [
  path.join('c:', 'Users', 'progr', 'Downloads', 'favicon.ico'),
  path.join('c:', 'Users', 'progr', 'Downloads', 'favicon (1).ico'),
  path.join('c:', 'Users', 'progr', 'Downloads', 'favicon (2).ico'),
  path.join('c:', 'Users', 'progr', 'Downloads', 'Static Sites', 'public', 'favicon.ico')
];

let copied = false;
for (const cand of candidates) {
  if (fs.existsSync(cand) && fs.statSync(cand).size > 100) {
    fs.copyFileSync(cand, path.join('c:', 'Users', 'progr', 'Downloads', 'Static site 3', 'public', 'favicon.ico'));
    console.log('✓ Copied valid favicon from:', cand);
    copied = true;
    break;
  }
}

if (!copied) {
  console.log('Using standard favicon');
}
