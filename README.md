# monorepo-libs
基于pnpm workspace + changeset + tuborepo管理多个子包

# monorepo项目结构
```
├── apps
|  └── storybook            # storybook
├── scripts
|  └── publish.js
├── packages
|  ├── cli                  # cli库
|  ├── hooks                # hooks库
|  └── ui                   # ui组件库
├── pnpm-lock.yaml
├── pnpm-workspace.yaml     # pnpm workspace配置
├── README.md
├── tsconfig.json           # tsconfig配置
├── package.json            # 根目录配置
└── turbo.json              # Tuborepo配置
```
优点: 统一管理依赖，减少重复安装。 支持包之间的内联依赖，实现内部包联动升级。 便于团队协作开发多个互相关联的子项目。

# pnpm workspace
 * 配置文件 pnm-workspace.yml
 ```
 packages:
    - "packages/*"
    - "apps/*"
    - '!**/tests/**'
 ```

 * 命令：
```
pnpm install：安装所有依赖，包含子包的模块依赖
pnpm build：执行所有子包的build
pnpm --filter <package-name> run <script-name>：为子包执行对应的script命令
pnpm add <dependency> -w：为当前工作区根目录添加依赖
```

# changeset
* 基本概念和功能: 用于管理版本和发布的工具，特别适合 monorepo 项目
* 主要命令：
```
# 创建变更集
pnpm changeset

# 更新版本号
pnpm changeset version

# 发布包
pnpm changeset publish
```
* 配置文件 (.changeset/config.json):
```
{
  "$schema": "https://unpkg.com/@changesets/config@3.0.0/schema.json",
  "changelog": "@changesets/cli/changelog",
  "commit": false,
  "fixed": [],
  "linked": [],
  "access": "restricted",
  "baseBranch": "main",
  "updateInternalDependencies": "patch",
  "ignore": []
}
```
* 发布流程：
```
# 1. 确保在主分支
git checkout master

# 2. 拉取最新代码
git pull origin master

# 3. 更新版本
pnpm changeset version

# 4. 构建
pnpm build

# 5. 发布
pnpm changeset publish

# 6. 提交版本更新
git add .
git commit -m "chore: publish packages"
git push origin main
```

# 构建工具Tuborepo
* 主要命令：
```
# 运行构建
turbo run build

# 并行运行多个任务
turbo run lint test build

# 只构建特定项目
turbo run build --filter=web...

# 开发模式
turbo run dev

# 清除缓存
turbo clean
```
* 配置文件：
```
{
  "$schema": "https://turbo.build/schema.json",
  "globalDependencies": ["**/.env.*local"],
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "test": {
      "dependsOn": ["build"],
      "outputs": [],
      "inputs": ["src/**/*.tsx", "src/**/*.ts", "test/**/*.ts", "test/**/*.tsx"]
    }
  }
}

```
* Turborepo 的主要优势：
  * 快速的增量构建
  * 智能缓存系统
  * 任务编排和依赖管理
  * 团队协作效率提升
  * 构建过程可视化
  * 与主流工具良好集成

# 总结
* 收获了私仓搭建的全流程体验
* pnpm workspace 解决高效管理多仓库依赖问题
* changeset 实现版本发布管理
* tuborepo + rollup 实现构建子包
* 集成storybook组件驱动开发
