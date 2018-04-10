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
### 二、全局API：
Vue.directive 自定义指令
```
Vue.directive("自定义指令名",function(el,binding){});
el:是你的div块 
binding:是个object对象，有name value等属性
生命周期：
Vue.directive("自定义指令名",{
    bind:function(){},      //绑定
    inserted:function(){},  //绑定到节点
    update:function(){},    //组件更新
    componentUpdate:function(){},    //组件更新完成
    unbind:function(){}     //解绑
});
```
Vue.extend构造器
 ```
 var 自定义名 = Vue.extend({
     template:模版
     data:function(){
          return{
                    模版中属性名1:属性值1,
                    模版中属性名2:属性值2,
                    ...
                }
     }
 });
//加载到标签中
new 自定义名().$mount(标签名或id);
 ```
 Vue.set全局变量
 ```
 Vue.set(app.属性,外部属性,需要改变的值)
 ```
 Vue声明周期(钩子函数)
 ```
  beforeCreate:function(){
                console.log("1-初始化之前");
            },
            created:function(){
                console.log("2-创建完成");
            },
            beforeMount:function(){
                console.log("3-挂载之前");
            },
            mounted:function(){
                console.log("4-被创建");
            },
            beforeUpdate:function(){
                console.log("5-更新之前");
            },
            updated:function(){
                console.log("6-更新之后");
            },
            activated:function(){
                console.log("7-activated");
            },
            deactivated:function(){
                console.log("8-deactivated");
            },
            beforeDestroy:function(){
                console.log("9-销毁之前");
            },
            destroyed:function(){
                console.log("9-销毁之后");
            }
 ```
Template模版制作
```
 ①用符号``创建模版
 template:`
        <h2 style='color:red'>我是模版</h2>
        `
②在标签里创建模版
<template id="t1">
     <h2 style="color: red">我是标签模版</h2>
</template>
调用：
data:{
    template:"#t1",
}
③用script标签制作模版
<script type="x-template" id="t2">
        <h2 style="color: red">我是script标签模版</h2>
</script>
调用：
data:{
    template:"#t2",
}
```
component组件
```
```
Vue.componen自定义组件
```
定义全局组件：
 Vue.component('hanxx',{
            template:`
                <h2 style='color:red'>我是全局自定义组件</h2>
            `
        })
定义局部组件：
 components:{
               'mydiv':{
                template:`
                    <div style='color:green'>我是局部自定义组件</div>`
                },
组件进行插值绑定
<mybind v-bind:num="msg"></mybind>
data:{
                message:'hello world!!!'
            },

'mybind':{
                    template:`<p style='color:yellow'>我是插入的一个数值：{{num}}</p> `,
                    props:['num'],
                
                },
父子组件问题
<father></father>
 //先定义子组件
        var chindName = {
            template:`
            <p style='color:red'>我是一个子组件</p>
            `
        }
        //定义父组件
        var fatherName = {
            template:`
                <div>
                    <p>我是父组件</p>
                    <chind></chind>
                </div>
            `,
            //在父组件中注册子组件
            components:{
                "chind":chindName,
            }
        }
var app=new Vue({
    el:'#app',
    components:{
        "father":fatherName,
    }  
})
component标签：
<component v-bind:is="who"></component>
<button v-on:click="change">点击测试</button>
---------------------------------------------------
    //定义component模版
       var componentAA={
           template:`
           <p style='color:red'>我是componentAA</p>
           `
       }
        var componentBB={
           template:`
           <p style='color:yellow'>我是componentBB</p>
           `
       }
       var componentCC={
           template:`
           <p style='color:green'>我是componentCC</p>
           `
       }
--------------------------------------------------
    data:{
                who: "componentAA"
            },
     components:{
                "componentAA":componentAA,
                "componentBB":componentBB,
                "componentCC":componentCC,
            },
    methods:{
                change:function(){
                    if(this.who=="componentAA"){
                        this.who="componentBB";
                    }else if(this.who=="componentBB"){
                       this.who="componentCC";
                    }else{
                        this.who="componentAA";
                    }
                },
            },
```
