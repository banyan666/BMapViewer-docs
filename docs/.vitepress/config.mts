import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/BMapViewer-docs/',
    title: "BMapViewer",
    description: "vue3的离线地图",
    lang: 'zh-CN',
    // 添加 Vite 相关配置
    vite: {
        server: {
            port: 1234,        // 修改为你想要的端口
            host: '0.0.0.0',   // 允许外部访问（可选）
            strictPort: true,  // 如果端口被占用，直接退出而不是尝试下一个可用端口（可选）
            open: true         // 自动打开浏览器（可选）
        }
    },

    themeConfig: {
        // ... 你原有的 themeConfig 配置保持不变
        nav: [
            { text: '指南', link: '/introduction/index' },
        ],
        sidebar: [
            {
                items: [
                    {
                        text: '快速入门', items: [
                            { text: '介绍', link: '/introduction/index' },
                            { text: 'Hello World!', link: '/introduction/hello' },
                        ],
                        collapsed: false,
                    },
                    { text: '数据处理 Data', link: '/data' },
                    { text: '综合应用', link: '/examples' },
                    { text: '组件 BMapViewer', link: '/component/index' },
                    { text: 'useCesium', link: '/component/use-cesium' },
                    {
                        text: '可视化图层 MapLayers', items: [
                            { text: '底图图层 BaseMapLayer', link: '/layers/base-map' },
                            { text: '图标图层 IconGroupLayer', link: '/layers/icon-group' },
                            { text: '文字图层 LabelGroupLayer', link: '/layers/label-group' },
                            { text: '气泡图层 BubbleGroupLayer', link: '/layers/bubble-group' },
                            { text: '广告牌图层 BubbleLayer ', link: '/layers/bubble-dom' },
                            { text: '圆图层 CircleGroupLayer', link: '/layers/circle-group' },
                            { text: '圆爆炸图层 CircleExplosionLayer', link: '/layers/circle-explosion' },
                            { text: '水波纹图层 CircleWaveLayer', link: '/layers/circle-wave' },
                            { text: '点扩散图层 PointRippleLayer', link: '/layers/point-ripple' },
                            { text: '线图层 LineGroupLayer', link: '/layers/line-group' },
                            { text: '线图层 LinePrimitiveLayer', link: '/layers/line-primitive' },
                            { text: '线图层 LineMaterialLayer', link: '/layers/line-material' },
                            { text: '面图层 PolygonPrimitiveLayer', link: '/layers/polygon-primitive' },
                            { text: '3D白膜图层 Build3DLayer', link: '/layers/build-3d' },
                            { text: '热力图图层 HeatmapLayer', link: '/layers/heatmap' },
                        ],
                        collapsed: false,
                    },
                    { text: '拾取工具 PickTools', link: '/tools/pick-tool' },
                    { text: '空间分析工具库 turf', link: '/tools/turf' },
                ]
            }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/banyan666/BMapViewer' }
        ],
        search: {
            provider: 'local'
        },
    },
})
