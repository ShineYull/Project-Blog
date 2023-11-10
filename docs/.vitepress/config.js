import mdItCustomAttrs  from 'markdown-it-custom-attrs'

export default {
    markdown:{
        config: (md) => {
            // use more markdown-it plugins!
            md.use(mdItCustomAttrs, 'image', {
                'data-fancybox': "gallery"
            })
        }
    },

    title: 'Shine开发博客',
    description: 'Just playing around.',
    head:[
        ['link', { rel: 'icon', href: '/sudaqishui.webp' }],
        ["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css" }],
        ["script", { src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js" }],
    ],
    lastUpdated: true,
    themeConfig: {
        siteTitle: "Shine开发博客",  //左上角的
        logo: "/sudaqishui.webp",      //左上角的logo,注意：它的路径是从public文件夹开始的，所以这里引用的是public/logo.jpg这张图
        nav: [                  //右上角的导航栏
        //   {
        //     text: "xxxxx",             //导航标签的名字
        //     items: [                  //这种格式是有下拉菜单的版本
        //       { text: "xxx", link: "/articles/basic/index" },      //text代表每一项的名字，link是连接的位置
        //       { text: "xxx", link: "/articles/vue/index" },
        //       { text: "xxx", link: "/articles/react/index" },
        //     ],
        //   },
        //   { text: "xxxx", link: "xxxxx" },   //这种是没有下拉菜单的版本
        //   { text: "xxxx", link: "/intent/" },
        ],
        algolia: {
            appId: '...',
            apiKey: '...',
            indexName: '...'
        },
        socialLinks: [{ icon: "github", link: "https://github.com/ShineYull/Project-Blog" }],       //右上角的社交标签，支持多种icon，具体可以查询官网，反正没有QQ和微信，放个git差不多意思意思就行了
        sidebar: {
            "/Indie_Games_Blog/": [
                {
                    text: "开发日志分享",    //标签名字
                    collapsible: true,    //是不是可以动态展开
                    collapsed: false,      //默认是不是展开
                    items: [              //孩子
                        { text: "2023年9月15日", link: "/Indie_Games_Blog/2023_9_15" },
                        { text: "2023年9月18日", link: "/Indie_Games_Blog/2023_9_18" },
                        { text: "2023年9月23日", link: "/Indie_Games_Blog/2023_9_23" },
                        { text: "2023年9月24日", link: "/Indie_Games_Blog/2023_9_24" },
                        { text: "2023年11月11日", link: "/Indie_Games_Blog/2023_11_11" },
                    ],
                },
            ],
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright ©2023 By <a href="https://github.com/shineyull">Shine</a>'
        },
        editLink: {
            pattern: 'https://github.com/ShineYull/Project-Blog/issues',
            text: '欢迎提issues'
        },
        lastUpdatedText: "最近一次更新",
    },
}