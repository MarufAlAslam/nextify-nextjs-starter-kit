#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectName = process.argv[2] || "nextify-app";
const targetDir = path.join(process.cwd(), projectName);
const templateDir = path.join(__dirname, 'template');

function copyFolderSync(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }
    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (let entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            copyFolderSync(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

// Check if the target directory already exists
if (fs.existsSync(targetDir)) {
    console.error(`❌ Directory "${projectName}" already exists.`);
    process.exit(1);
}

// Create the target directory and copy files
fs.mkdirSync(targetDir, { recursive: true });
copyFolderSync(templateDir, targetDir);

console.log(`✅ Nextify app created successfully at "${projectName}"`);
console.log(`\nTo get started:\n  cd ${projectName}\n  npm install\n  npm run dev`);
