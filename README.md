# X-MEAN-SEED
一款基于MEAN（Mongo, Express, Angular, Node）的种子项目

# Notices

项目整合MEAN，目前框架和Demo均已完成，下面是一些介绍如下：

前端采用Require V2.1.X + Angular V1.4.X + Bootstrap

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
├──views          // 视图(未依赖views,已静态化)
```
# Quick Start

1. 下载最新版本`X-MEAN-SEED`
2. 安装node依赖lib`npm install`
3. 安装前端依赖lib`bower install`
4. 启动MongoDB
5. 启动项目`node www`

# Logs

**X-MEAN-SEED V1.0.1**
1.去除models下base辅助方法
2.去除services下version
3.增加logs文件夹(不然启动时log4js会异常)
4.bootstrap4未稳定，实际使用请修改app/views/layouts下bootstrap.css即可，项目中并未引用angular-bootstrap

**X-MEAN-SEED V1.0.0**
1.前端登陆逻辑完善 2016/01/14
2.整合Dao至Model，优化后端结构 2016/01/14
3.增加组件(ng-toastr/ui-router) 2016/01/11
4.前端搭建及调试 2015/12/27
5.后端模块搭建及调试 2015/12/23

# Demo

1.[X-QUESTION](https://github.com/radishj/X-Zone/tree/master/40_node/03_X-QUESTION)
2.[node-angular-lottery](https://github.com/radishj/node-angular-lottery)

# Reference

* [startersquad.com](https://github.com/StarterSquad/startersquad.com "startersquad.com")
* [NodeBB](https://github.com/NodeBB/NodeBB)
* [NJBlog](https://github.com/mz121star/NJBlog)
* [Nodeclub](https://github.com/cnodejs/nodeclub)
