// build.js
const { execSync } = require('child_process');
const path = require('path');

try {
    // Set executable permissions
    execSync('chmod +x ./node_modules/.bin/vite');

    // Run the build
    execSync('npm run build', { stdio: 'inherit' });
} catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
}