import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const scanDirs = ['src/app', 'src/components', 'src/content'];
const banned = [
  'กำไรแน่นอน',
  'ไม่ขาดทุน',
  'ไร้ความเสี่ยง',
  'risk-free',
  'guaranteed profit',
  'win rate 100%',
  'แม่น 100%',
  'รายได้แน่นอน',
  'รวยเร็ว',
  'เปลี่ยนชีวิต'
];

const extensions = new Set(['.ts', '.tsx', '.md', '.mdx', '.json']);
const findings = [];

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }
    if (!extensions.has(path.extname(entry.name))) continue;
    const content = fs.readFileSync(full, 'utf8');
    const lower = content.toLowerCase();
    for (const phrase of banned) {
      if (lower.includes(phrase.toLowerCase())) {
        findings.push({ file: path.relative(root, full), phrase });
      }
    }
  }
}

for (const dir of scanDirs) {
  walk(path.join(root, dir));
}

if (findings.length > 0) {
  console.error('Compliance scan found high-risk phrases:\n');
  for (const finding of findings) {
    console.error(`- ${finding.file}: "${finding.phrase}"`);
  }
  console.error('\nReview context. Some appearances inside compliance docs may be intentional.');
  process.exitCode = 1;
} else {
  console.log('Compliance scan passed.');
}
