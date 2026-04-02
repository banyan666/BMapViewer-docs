---
prev:
  text: '介绍'
  link: '/introduction/index'
next:
  text: 'useCesium'
  link: '/component/use-cesium'
---

# BMapViewer 组件

BMapViewer组件是基于vue3封装的Cesium加载组件,可以通过简单的参数传递即可实现地图加载。
## 示例
详细可参考<a href="/introduction/hello.html#方式1-vue组件加载">方式1 - vue组件加载</a>
```vue
<template>
  <BMapViewer 
      :sceneMode="0" 
      :camera="mapConfig" 
      @ready="ready" 
      @click="onClick" 
      ref="cesiumRef">
  </BMapViewer>
</template>
```

## API

#### Attributes-属性

|    属性名    |       说明       |   类型   |      默认       |      可选值      |
|:---------:|:--------------:|:------:|:-------------:|:-------------:|
|    id     |      容器id      | string | cesium-viewer |               |
| sceneMode | 地图模式，平面2D和3D地球 | number |       0       | 0:2D模式 <br/>1:3D模式 |
|   camera  |      相机参数      | object |     null      |      [参考mapConfig](./use-cesium.html#initcesium-初始化cesium-viewer)       |
|  baseColor  |      地球颜色      | string |     #112441      |               |

#### Events-事件

|  事件名  |    说明     |    类型    |  callback参数   |
|:-----:|:---------:|:--------:|:-------------:|
| ready | 地图加载完成时触发 | Function | `viewer` (Cesium.Viewer) |
| error | 地图加载失败时触发 | Function | `err` (Error) |
| click  | 鼠标左键点击事件 | Function | `{ lon, lat, feature }` |

#### Exposes-暴露

|  名称  |      说明      |   类型   |  参数类型  |
|:-----:|:------------:|:--------:|:------:|
| initMap |    地图初始化     | Function | `mapConfig` (Object) |
| startClick | 开启点击事件(默认开启) | Function | - |
| stopClick |    关闭点击事件    | Function | - |

#### Slots-插槽

|  插槽名  |      说明      |
|:-----:|:------------:|
| tool | 用于在地图上层放置自定义工具栏、控件等 DOM 元素，配合相对/绝对定位使用 |