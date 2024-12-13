# wxy-Project-accumulation

## wuxiyu的项目积累文件
# 前端决策树

* 框架
  * 三大框架里选哪个？
  	* react
  		* next.js
  		* after.js
  		* umi
  	* angular
  	* vue
  		* nuxt.js
  * 考虑小程序？
  	* 用原生、vue、还是 react 语法？
  	* 是否考虑代码共用？
  	* 小程序 -> vue|react 还是 vue|react -> 小程序？
* 语言
  * 引入强类型语言？
  	* TypeScript
  	* Flow
  * 支持的话，后面所有的流程都需要额外考虑，比如 test、构建、数据流、三方库支持等等
* CSS
  * 预编译语言选哪个？
    * less
    * sass
    * stylus
  * 如何避免命名冲突？
    * css modules
    	* 如何让部分文件不使用 css modules？
    * bem
  * 考虑 css-in-js？
    * styled components
    * emotion
    * radium
    * glamorous
  * 主题、在线换肤？
* 数据流
  * 数据流选哪个？
    * redux
      * redux 副作用库选哪个？
      	* redux-thunk
      	* redux-saga
      	* redux-observable
      * 要不要用 dva 或 rematch？
      * redux-persistent
    * mobx
      * 要不要上 mobx-state-tree?
    * rxjs
    * ngrx
    * vuex
    * 小而美的 unstated
    * 原生的 context + hooks
* 构建工具
  * 构建工具选哪个？
    * webpack
      * 怎么配？最佳实践是啥？
      * 如何让使用者扩展 webpack 配置？
      	* webpack-chain
      	* webpack-merge
      * tree-shaking 是啥？怎么开？
      * svg as component
      * 如何处理 HTML 文件？要不要用 html-webpack-plugin？
      * 如何提速？让启动和构建更快？
      	* 基于路由或 entry 的按需编译
      	* hard-source-webpack-plugin，有用，但 bug 多
      	* externals
      	* dll
      	* noParse，uglifyjs 的 exclude 配置等
      * 待补充，这里内容太多了。。
    * rollup
    * parcel
    * system-js
  * 压缩
    * JavaScript 压缩用啥？
      * uglifyjs2 - uglifyjs-webpack-plugin
      * uglify-es - terser-webpack-plugin
      * babel-preset-minify
    * CSS 压缩用啥？
      * cssnano
        * cssnano-preset-default 里哪些功能应该关掉？
      * clean-css
  * babel
    * 如何选择合适的 babel preset 和插件？
    * 如何选择必要的语法特性？一些不必要的语法会引入额外的尺寸。
    * 如何选择合适的补丁方案？
      * env + targets 配置
        * 用 entry 还是 usage？
      * transform-runtime + runtime
    * node_modules 要不要编译？
      * 不按规则转成 es5 再发布的 npm 包怎么处理？
      	* es5-imcompatible-versions
    * 要不要启用 babel-plugin-macros？
    * 如何写插件实现定制语法修改？
  * AST
    * 用哪套方案？
    	* babel 全家桶，parser + traverse + types + template + generator
    	* 老牌方案，esprima + escodegen + esquery
    * 要不要考虑封装后的 jscodeshift？
  * SourceMap
  * PostCSS
    * 如何选择合适的插件？
    * autoprefixer
    	* 如何保证给 babel 补丁方案的浏览器配置是同一份？
    * 是否启用高清方案？
* 组件工具
  * 文档工具用哪个？
  	* docz
  	* storyboard
  	* vuepress
  * 同时打包出 cjs、esm、bundled esm、umd 等多种格式
  * 用 rollup 还是封装过的 microbundle？
* UI 库
  * 选哪个？
  	* ant-design
  	* mintUI
  	* weUI
  	* material-ui
  	* ice
  * 如何按需打包？
  	* tree-shaking
  	* babel-plugin-import
* 数据通讯
  * 选哪个请求库？
  	* whatwg-fetch
  	* axios
  * 如何 mock 数据？
  * 如何代理 API 到后端？
  * 要不要上 graphql？
  * websocket
* 包管理工具
  * 包管理选哪个？
  	* npm
  	* yarn
  		* 要不要试着开启 Plug'n'Play？
  * 下载慢怎么办？
  	* 自搭源服务
  	* cnpm
  * 有私有包的需求？
* 路由
  * 路由选哪个库？
    * react-router 3 | 4
    * reach-router
    * router5
  * 路由采用集中配置式？约定式？还是分布的组件式？
  * 路由功能包含
    * 动态路由
    * 可选的动态路由
    * 嵌套路由
    * 基于路由的权限管理
    * 路由切换动效
    * 基于路由的面包屑
    * 滚动条状态
  * history 用 hash 还是 browser
    * browser 时需额外考虑部署问题
    * query 处理选 qs 还是 query-string
* 测试
  * 测试框架选哪套？
    * jest 全家桶
    * mocha + istanbul + chai + sinon
  * ui 测试用哪套方案？
    * enzyme + jsdom
    * 官方的 react-test-rerender
    * kentcdodds 的 test-testing-library
  * e2e 测试
    * puppeteer
    * cypress
  * 测试录制回放
  * 数据模拟和准备
* 工程
  * linters and formatters
    * eslint
      * 配置选哪套？
      	* eslint-config-react-app
      	* eslint-config-prettier
      	* eslint-config-airbnb
      	* 自建？
      * 要不要用 prettier？和 eslint 规则的冲突怎么解决？
    * tslint
      * Typescript 校验是用 eslint 还是 tslint？
    * stylelint
  * 目录组织
* ssr
  - next.js
  - after.js
  - nuxt.js
* 静态站点
  * gatsby.js
* 性能优化
  * 是否启用 pwa？怎么用？
    * 手写 service-worker.js
    * workbox
    * 选择哪种缓存策略？
    * PRPL Pattern
  * 基于路由的 code splitting
    * css 该拆还是合？是否应该按需加载？
  * 怎么提取公共部分？
    * vendors 还是 common？
    * minChunks 怎么配？
    * 提一个还是多个？
    * 项目里有几组不同的公共部分时怎么处理？
    * dll 适合作为公共提取方案吗？
  * prefetch
  * critical css
  * rawact（DOM 直出）
  * 更多待补充...
* 部署
  * 怎么部署到非根目录？
  * 静态文件需要部署到 cdn 时怎么处理？
  * 如何设置运行时的 publicPath？
  * 如何针对 css 配置额外的 publicPath？

