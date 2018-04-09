# VueJS学习路线
### 环境搭建
---
* 1.安装nodejs
* 2.安装npm
* 3.安装淘宝镜像
```
①通过 config 配置指向国内镜像源:
npm config set registry http://registry.cnpmjs.org //配置指向源
npm info express  //下载安装第三方包
②通过 config 配置指向国内镜像源
npm --registry http://registry.cnpmjs.org info express
③在配置文件 ~/.npmrc 文件写入源地址
nano ~/.npmrc   //打开配置文件
registry =https://registry.npm.taobao.org   //写入配置文件
```
* 4.下载vue.js
* 5.安装 live-server:
* npm install -g live-server
### 一、Vue的常用指令：
```
v-if 显示与隐藏
和v-show对比的区别 就是是否删除dom节点   默认值为false
v-else-if 
必须和v-if连用
v-else
必须和v-if连用  不能单独使用  否则报错   模板编译错误
v-show 显示与隐藏
传递值为布尔值 默认false
v-for 循环
格式 v-for="字段 in(for) 数组json"
v-on 事件绑定
函数必须写在methods里面
@click 快捷方式
v-text 解析文本
v-html 解析html标签
v-model 数据绑定
data 返回对象
v-bind 动态绑定
及时对页面的数据进行更改
v-once 进入页面时  只渲染一次 不在进行渲染
v-cloak 防止闪烁
v-pre  把标签内部的元素原位输出
```

