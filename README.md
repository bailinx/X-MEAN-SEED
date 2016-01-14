# X-MEAN-SEED
一款基于MEAN（Mongo, Express, Angular, Node）的种子项目

# Notices

项目整合MEAN，目前框架和Demo均已完成，下面是一些介绍如下：

前端采用Require V2.1.X + Angular V1.4.X + Bootstrap V4.0.0-alpha.2

前端结构

```
├──controllers    // 控制器
├──directives     // 指令
├──filters        // 过滤器
├──services       // 服务
├──app.js         // app(注入上下文)
├──bootstrap.js   // 项目启动
├──main.js        // 项目入口以及配置
├──routes.js      // 路由
```

后端采用Node V4.X + Express V4.X

后端结构

```
├──api            // api
├──config         // 项目配置
├──controllers    // 控制器
├──middleware     // 中间件
├──models         // 模型
├──routes         // 路由
├──utils          // 第三方插件(目前集成log4js)
├──views          // 视图(当前采用hbs模板引擎，后续可能全静态)
```
# Quick Start

1. 下载最新版本`X-MEAN-SEED`
2. 安装node依赖lib`npm install`
3. 安装前端依赖lib`bower install`
4. 启动MongoDB
5. 启动项目`node www`

# Logs

**X-MEAN-SEED V1.0.0**
- 前端登陆逻辑完善 2016/01/14
- 整合Dao至Model，优化后端结构 2016/01/14
- 增加组件(ng-toastr/ui-router) 2016/01/11
- 前端搭建及调试 2015/12/27
- 后端模块搭建及调试 2015/12/23

# Demo

1.[X-QUESTION](https://github.com/radishj/X-Zone/tree/master/40_node/03_X-QUESTION)
![](https://github.com/radishj/X-Zone/blob/master/40_node/03_X-QUESTION/public/img/demo2.gif?raw=true)

# Reference

* [startersquad.com](https://github.com/StarterSquad/startersquad.com "startersquad.com")
* [NodeBB](https://github.com/NodeBB/NodeBB)
* [NJBlog](https://github.com/mz121star/NJBlog)
