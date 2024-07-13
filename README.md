# KSW-UX 组件库文档&示例

技术栈:

- Vue 3, TypeScript, Vite, Tailwindcss, less, StroyBook8

## 目录结构

```
.
├── .storybook | storybook 配置文件
├── .kswux | storybook 配置文件
├── public | 静态资源, 里面有分包文字
├── src
│   ├──  Docs | 组件文档, storybook 示例
│   ├──  ExampleComponents | 组件调试示例
│   ├──  ExamplePage | 页面调试示例
│   ├──  router |  路由(pnpm run dev)
│   ├──  stories | sb 官方示例(将来移除)
│   ├──  task | 临时需求文件(将来移除)
│   ├──  input.css | tailwindcss watch入口文件
│   ├──  output.css | tailwindcss watch 输出文件
├── vite.config.ts
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 注意事项

常用命令:

- `npm run dev`: 启动 测试环境示例
- `npm run sb`: 启动 storybook
- `npm run watch` : 监听 tailwindcss 变化并编译
