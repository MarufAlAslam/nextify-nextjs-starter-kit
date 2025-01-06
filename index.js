#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectName = process.argv[2] || "nextify-app";
const targetDir = path.join(process.cwd(), projectName);

if (fs.existsSync(targetDir)) {
    console.error(`Directory "${projectName}" already exists.`);
    process.exit(1);
}

fs.mkdirSync(targetDir, { recursive: true });
execSync(`cp -r ${path.join(__dirname, 'template')}/* ${targetDir}`);
console.log(`✅ Nextify app created successfully at "${projectName}"`);
console.log(`\nTo get started:\n  cd ${projectName}\n  npm install\n  npm run dev`);
