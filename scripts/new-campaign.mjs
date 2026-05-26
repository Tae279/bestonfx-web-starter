import fs from 'node:fs';
import path from 'node:path';

const slug = process.argv[2];

if (!slug) {
  console.error('Usage: npm run campaign:new -- <slug>');
  process.exit(1);
}

if (!/^[a-z0-9-]+$/.test(slug)) {
  console.error('Slug must use lowercase letters, numbers, and hyphens only.');
  process.exit(1);
}

const dir = path.join(process.cwd(), 'src/content/campaigns');
fs.mkdirSync(dir, { recursive: true });

const file = path.join(dir, `${slug}.json`);

if (fs.existsSync(file)) {
  console.error(`Campaign already exists: ${file}`);
  process.exit(1);
}

const payload = {
  slug,
  title: slug.split('-').map((part) => part[0]?.toUpperCase() + part.slice(1)).join(' '),
  status: 'draft',
  owner: 'marketing',
  expiresAt: null,
  riskWarningRequired: true,
  approvedClaims: []
};

fs.writeFileSync(file, JSON.stringify(payload, null, 2) + '\n');
console.log(`Created ${path.relative(process.cwd(), file)}`);
