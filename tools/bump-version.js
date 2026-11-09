// Run:  node tools/bump-version.js        (or: node tools/bump-version.js 5   to set a number)
// Raises the site version in index.html by one. The number is shown in the page footer and the Admin page, and is added as ?v=N
// to every script and stylesheet so browsers fetch the new files instead of an old cached copy.
const fs = require('fs'), path = require('path');
const file = path.join(__dirname, '..', 'index.html');
let s = fs.readFileSync(file, 'utf8');
const m = s.match(/<meta name="oel-version" content="(\d+)">/);
if (!m) { console.error('ERROR: index.html has no <meta name="oel-version"> line'); process.exit(1); }
const arg = parseInt(process.argv[2], 10), next = arg > 0 ? arg : Number(m[1]) + 1;
s = s.replace(/(<meta name="oel-version" content=")\d+(">)/, '$1' + next + '$2')
     .replace(/(href="style\.css\?v=)\d+/, '$1' + next)
     .replace(/(src="(?:content\/[a-z\-]+|app)\.js\?v=)\d+/g, '$1' + next)
     .replace(/(id="app-ver">Phiên bản )\d+/, '$1' + next);
fs.writeFileSync(file, s);
console.log('Version ' + m[1] + ' -> ' + next);
