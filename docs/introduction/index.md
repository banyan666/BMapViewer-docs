---
next:
  text: 'Hello World!'
  link: '/introduction/hello'
---

# BMapViewer是什么？
## 介绍
BMapViewer是基于Cesium 1.118.2版本和vue3封装的离线地理信息可视化库，可以用来展示基于地理信息格式的点线面数据；
简化Cesium的使用，降低前端人员对地图可视化的使用门槛，能够在地图上实现一些三维数据展示效果；并且组件库封装了很多方法，帮助前端快速实现对地图的相关操作。
如果你的项目是`vite`+`vue3`，那么你可以选择使用BMapViewer。
## 应用场景
- 快速开发三维地图
- 快速开发三维可视化效果
- 部署离线地图
- 可视化大屏

## 准备
1. 项目终端执行以下命令下载对应的cesium库和vite-plugin-cesium插件。
```shell
pnpm install cesium@1.118.2 vite-plugin-cesium@1.2.22
```
2. 进入项目的vite.config.js文件中，使用注册vite-plugin-cesium插件
```js
// vite.config.js
import { defineConfig } from 'vite'
import cesium from 'vite-plugin-cesium'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins:[
        vue(),
        cesium()
    ]
})

```
3. 进入到main.js中引入cesium，并将cesium实例挂载到window对象中，方便后续使用。
```js
// main.js
import * as Cesium from "cesium";
import 'cesium/Build/Cesium/Widgets/widgets.css'
window.Cesium = Cesium

```
4. (未遇到此错误可忽略)由于可能是pnpm包管理的问题，使用组件可能报错cesium依赖库找不到zip.js，如果出现这个问题需要手动安装@zip.js/zip.js解决找不到zip.js库的问题。
![An image](/introduction/zip_err.jpg)

终端执行以下命令
```shell
pnpm install '@zip.js/zip.js@2.7.34'
```
或者直接修改package.json，添加"@zip.js/zip.js": "2.7.34"执行pnpm install 进行安装

![An image](/introduction/install_zip.jpg)