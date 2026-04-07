# BMapViewer
基于Vue3、Vite、Cesium封装的地理信息可视化库。

## 如何使用
1. 确保你的项目有Cesium库，因为该组件依赖Cesium(目前依赖1.118.2版本，其他版本未验证)。
2. 将BMapViewer复制到你的项目组件库中。
3. 并且按照如下配置。
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
```js
// main.js
import * as Cesium from "cesium";
import 'cesium/Build/Cesium/Widgets/widgets.css'
window.Cesium = Cesium

```
4. 组件用法可以参考文档。

`文档地址`：[docs](https://banyan666.github.io/BMapViewer-docs/)


该组件若不满足你的需求，可联系作者提供需求，作者会进行开发补充。

# 联系我
## 邮箱：<EMAIL>15029296293@163.com
## 微信：bryan_by666
## QQ：1449301027

# 打赏
<img src="ds_wx.jpg" width="200" />
<img src="ds_zfb.jpg" width="200" />