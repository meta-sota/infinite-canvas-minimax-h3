<p align="center">
  <img src="web/public/logo.svg" width="96" alt="infinite-canvas logo">
</p>

<h1 align="center">无限画布 (infinite-canvas)</h1>

<p align="center">
  <a href="https://linux.do/"><img src="https://img.shields.io/badge/Linux.do-Community-2b6de8?style=flat-square" alt="Linux.do"></a>
  <a href="https://render.com/deploy?repo=https://github.com/meta-sota/infinite-canvas"><img src="https://img.shields.io/badge/Render-Deploy-46e3b7?style=flat-square&logo=render&logoColor=111111" alt="Deploy to Render"></a>
  <a href="https://github.com/meta-sota/infinite-canvas"><img src="https://img.shields.io/github/stars/meta-sota/infinite-canvas?style=flat-square&logo=github" alt="GitHub stars"></a>
  <a href="https://github.com/meta-sota/infinite-canvas/tags"><img src="https://img.shields.io/github/v/tag/meta-sota/infinite-canvas?style=flat-square&label=version" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-f97316?style=flat-square" alt="License"></a>
  <a href="https://vite.dev/"><img src="https://img.shields.io/badge/Vite-7-646cff?style=flat-square&logo=vite&logoColor=white" alt="Vite"></a>
  <a href="https://reactrouter.com/"><img src="https://img.shields.io/badge/React_Router-7-ca4245?style=flat-square&logo=reactrouter&logoColor=white" alt="React Router"></a>
</p>

<p align="center">
<a href="https://trendshift.io/repositories/50077?utm_source=repository-badge&amp;utm_medium=badge&amp;utm_campaign=badge-repository-50077" target="_blank" rel="noopener noreferrer"><img src="https://trendshift.io/api/badge/repositories/50077" alt="meta-sota%2Finfinite-canvas | Trendshift" width="250" height="55"/></a>
</p>

<p align="center">
  <a href="docs/content/docs/overview/quick-start.mdx">快速开始</a> · <a href="docs/content/docs/overview/features.mdx">功能介绍</a> · <a href="docs/content/docs/overview/render.mdx">Render 部署</a> · <a href="docs/content/docs/overview/docker.mdx">Docker 部署</a> · <a href="docs/content/docs/canvas/canvas-node-manual.mdx">画布节点操作手册</a> · <a href="docs/content/docs/canvas/canvas-shortcuts.mdx">画布快捷键</a> · <a href="SECURITY.md">漏洞提交</a> · <a href="docs/content/docs/progress/todo.mdx">待办事项</a> · <a href="canvas-agent/README.md">本地 Canvas Agent</a> · <a href="plugins/infinite-canvas">Codex app 插件</a>
</p>

<p align="center">
  <a href="https://canvas.metaso.cn/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;"><strong style="color: #2563eb;">🚀 在线体验 MiniMax H3：canvas.metaso.cn →</strong></a>
</p>

无限画布是一款面向图片与视频创作的开源工作台。它把画布编排、AI 图片生成、MiniMax H3 视频生成、参考素材、对话助手、提示词库和素材沉淀放在同一个界面里，适合连续探索并迭代视觉方案。

> [!CAUTION]
> 项目目前处于开发阶段，不保证历史数据兼容。各种本地存储格式都可能直接调整，欢迎关注后续更新。
>
> 如果你需要稳定维护自己的分支，建议自行 fork 后独立开发。二次开发与 PR 请保留原作者信息和前端页面标识。

## 技术支持

<div align="center">
  <a href="https://metaso.cn/minimax-h3/?s=inf" target="_blank" rel="noopener noreferrer">
    <img src="assets/metaso.jpg" width="163" alt="秘塔科技">
  </a>
  <h3>秘塔 MiniMax H3 视频生成服务</h3>
  <p>秘塔为无限画布提供 MiniMax H3 视频生成技术支持，已适配原生 MiniMax H3 协议，支持 768P 与 2K 输出、4–15 秒视频时长，以及图片、视频和音频参考素材。无需自建 GPU，即可在画布中直接创建和管理视频任务。</p>
  <p><strong>通过无限画布专属链接注册，可获取赠送额度及专属优惠：</strong><br>
    <a href="https://metaso.cn/minimax-h3/?s=inf" target="_blank" rel="noopener noreferrer">打开 MiniMax H3 控制台</a>
  </p>
</div>

### MiniMax H3 价格

| 项目 | 价格 | 计费说明 |
| --- | ---: | --- |
| 2K 视频输出 | 0.15 元/秒 | 按生成视频时长计费 |
| 768P 视频输出 | 0.09 元/秒 | 按生成视频时长计费 |
| 音频输入 | 免费 | 参考音频不额外收费 |
| 图片输入 | 前 5 张免费，超出 0.05 元/张 | 按输入图片数量计费 |
| 参考视频输入（2K 输出） | 0.15 元/秒 | 按输入视频时长计费 |
| 参考视频输入（768P 输出） | 0.09 元/秒 | 按输入视频时长计费 |
| H3 Context IR | 0.05 元/次 | 默认开启，可在控制台关闭 |

> 以上价格以 MiniMax H3 控制台的最新计费规则为准。

## 核心功能

- 无限画布：多画布项目、节点拖拽缩放、连线、小地图、撤销重做、导入导出。
- AI 创作：浏览器前台直连你配置的 OpenAI 兼容接口，支持文生图、图生图、参考图编辑、文本问答、音频和视频生成。
- MiniMax H3 视频生成：提供原生 MiniMax H3 协议的视频生成节点，支持 768P 与 2K 输出、4–15 秒视频时长和画面比例设置；节点支持引用图片、视频和音频参考素材，并会随视频生成请求一并提交。
- 画布助手：围绕选中节点和上游节点对话、生图，并把结果插回画布。
- 本地 Agent：通过本机 Canvas Agent 连接 Codex / Claude Code，让 Agent 通过 MCP 操作当前画布；
- Codex App 插件：提供 Codex app 插件，安装后会自动注册 MCP 并尝试拉起本地 Agent。
- 插件系统：支持通过 URL 动态安装 / 启用 / 更新 / 卸载远程节点插件，并提供 TypeScript SDK 自行开发画布节点插件。
- 自定义接口调用：可自定义生图 / 视频接口的调用方式，灵活适配各类中转站与自建服务。
- 提示词库：浏览器前端直连多个 GitHub 开源项目，并缓存到 IndexedDB。

完整功能说明见 [功能介绍](docs/content/docs/overview/features.mdx)。

如果你在为担心没有合适的生图API来发愁，可以查看该免费生图项目：[chatgpt2api](https://github.com/basketikun/chatgpt2api)

## 快速开始

AI API Key、Base URL、画布、素材和生成记录默认保存在浏览器本地。

### 本地开发

```bash
git clone git@github.com:meta-sota/infinite-canvas.git
cd infinite-canvas
cd web
bun install
bun run dev
```

### Docker 运行

```bash
git clone git@github.com:meta-sota/infinite-canvas.git
cd infinite-canvas
docker compose up -d
```

运行后默认端口3000，可访问 `http://localhost:3000`。

首次打开后进入右上角配置，填入自己的 OpenAI 兼容 `Base URL` 和 `API Key`。

如果默认的OpenAI接口调用方式与您的API不同，可自定义生图/视频脚本调用。

## 效果展示

<table width="100%">
  <tr>
    <td width="50%"><img src="https://i.ibb.co/TDFvGWDT/image.png" alt="image" border="0"></td>
    <td width="50%"><img src="https://i.ibb.co/zVwJq3YS/image.png" alt="image" border="0"></td>
  </tr>
  <tr>
    <td width="50%"><img src="https://i.ibb.co/PvY3qhhK/image.png" alt="image" border="0"></td>
    <td width="50%"><img src="https://i.ibb.co/7D04LwN/image.png" alt="image" border="0"></td>
  </tr>
  <tr>
    <td width="50%"><img src="https://i.ibb.co/bj30FtS5/5.png" alt="5" border="0"></td>
    <td width="50%"><img src="https://i.ibb.co/hxRvjw51/image.png" alt="image" border="0"></td>
  </tr>
  <tr>
    <td width="50%"><img src="https://i.ibb.co/jkWsF8q1/image.png" alt="image" border="0"></td>
    <td width="50%"><img src="https://i.ibb.co/XrnfXHx7/image.png" alt="image" border="0"></td>
  </tr>
</table>

## 联系方式

如需商业合作可联系：

客服微信号：19980541467

## 开源协议

本项目使用 [MIT License](LICENSE)。任何人都可以免费使用、复制、修改、分发、再授权和商业使用本项目，也可以用于闭源产品。

## Star History

<a href="https://www.star-history.com/?repos=meta-sota%2Finfinite-canvas&type=date&legend=top-left">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/chart?repos=meta-sota/infinite-canvas&type=date&theme=dark&legend=top-left" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/chart?repos=meta-sota/infinite-canvas&type=date&legend=top-left" />
   <img alt="Star History Chart" src="https://api.star-history.com/chart?repos=meta-sota/infinite-canvas&type=date&legend=top-left" />
 </picture>
</a>

## 二次开发说明

本项目是秘塔为方便用户使用 MiniMax H3 模型进行视频生成而开展的二次开发版本。

### 原作者信息

- 原作者：[@basketikun](https://github.com/basketikun)
- 原项目：[basketikun/infinite-canvas](https://github.com/basketikun/infinite-canvas)
