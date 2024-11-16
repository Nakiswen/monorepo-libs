// scripts/publish.js
const { execSync } = require('child_process');
const path = require('path');

const publishPackages = async () => {
  try {
    // 清理
    execSync('pnpm -r exec rm -rf dist', { stdio: 'inherit' });
    
    // 构建
    execSync('pnpm build', { stdio: 'inherit' });
    
    // 发布
    execSync('pnpm -r publish --no-git-checks', {
      stdio: 'inherit',
      env: {
        ...process.env,
        NPM_TOKEN: process.env.NPM_TOKEN || 'your-local-token'
      }
    });
  } catch (error) {
    console.error('发布失败:', error);
    process.exit(1);
  }
};

publishPackages();