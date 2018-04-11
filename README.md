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
### 三、构造器选项：
propsData传值
```
<header></header>
var header_a=Vue.extend({
            template:`<p>{{msg}}---我是propsData传的值：{{a}}</p>`,
            data:function(){
                return{
                    msg:'Hello ,i m return header!',
                }
            },
            props:['a'],
        });
        
//绑定
new header_a({propsData:{a:111}}).$mount('header');
```
computed格式化输出
```
data:{
                price:100,
            },
computed:{
        newPrice:function(){
        return this.price="￥"+this.price+"元";
        },}

<li v-for="item in resultNew">{{item}}</li>
 var newsList=[
            {title:'河南新闻',date:'2017/12/12'},
            {title:'北京新闻',date:'2017/12/10'},
            {title:'上海新闻',date:'2018/04/04'},
            {title:'武汉新闻',date:'2018/12/12'},
        ]
data:{
    newsList:newsList
}
computed:{
     resultNew:function(){
                    return this.newsList.reverse(); //对数组元素进行翻转
            }    
}
```
methods方法选项

watch数据监控
```
        <p>今日温度:{{hot}}</p>
        <p>穿衣建议:{{opt}}</p>
        <button @click="up(3)">提升温度</button>
        <button @click="down(3)">降低温度</button>

        var shirt=["羽绒服","毛衣","短袖"];
        var app=new Vue({
            el:'#app',
            data:{
               hot:14,
               opt:"毛衣"
            },
            methods:{
                up:function(x){
                    this.hot+=x;
                },
                down:function(x){
                    this.hot-=x;
                }
            },
            watch:{
                hot:function(newVal,oldVal){    //监控的数据
                    if(newVal >=26){
                        this.opt=shirt[2];
                    }else if(newVal<26 && newVal >10){
                        this.opt=shirt[1];
                    }else{
                        this.opt=shirt[0];
                    }
                }
            }
        });
        //app.$watch("hot",function(newVal,oldVal){}); //也可以
```
Mixins混入选项

extends拓展选项

注意：如果插值形式从 {{}} ==> ${}
需要加入属性： delimiters:['${','}']
### 四、内置组件与实例
slot传值：
```
<body>
    <h1>slot</h1>
    <hr>
    <div id="app">
        <hanxx> 
            <span slot="name">{{hanxxData.name}}</span>
            <span slot="age">{{hanxxData.age}}</span>
            <span slot="sex">{{hanxxData.sex}}</span>
            <span slot="skill">{{hanxxData.skill}}</span>
        </hanxx>
    </div>
    <template id="tep">
        <div>
                <p>姓名：<slot name="name"></slot></p>
                <p>年龄：<slot name="age"></slot></slot></p>
                <p>性别：<slot name="sex"></slot></slot></p>
                <p>职业：<slot name="skill"></slot></slot></p>
        </div>
    </template>
    <script type="text/javascript">
        var hanxx={
            template:"#tep"
        };
        var app=new Vue({
            el:'#app',
            data:{
                hanxxData:{
                    name:"韩小星星",
                    age:27,
                    sex:"男",
                    skill:"IT"
                },
            },
            components:{
                "hanxx":hanxx,
            }
        })
    </script>
</body>
```
引入jquery.js
```
<!-- jquery-3 -->
<script type="text/javascript" src="../../assets/js/jquery-3.3.1.min.js"></script>
<div id="app">
        <!-- 引入jquery,更改其显示内容 -->
        {{message}}
    </div>
<script type="text/javascript">
        var app=new Vue({
            el:'#app',
            data:{
                message:'hello world!!!'
            },
            mounted:function(){ //声明周期 在挂载的时候都引用jequery
                $("#app").html("我是Vue引入的Jquery@@@");
            }
        })
    </script>
```
$mount挂载方法 $destroy 卸载销毁 $forceUpdate更新 $nextTick 修改
```
<body>
    <h1>$mount</h1>
    <hr>
    <div id="app"> 
    </div>
    <button onclick="destroy()">卸载</button>
    <button onclick="reload()">更新</button>
    <button onclick="tick()">修改</button>
    <script type="text/javascript">
        var han = Vue.extend({
            template:`<p>{{msg}}</p>`,
            data:function(){
                return {
                    msg:"hello 小星星！！！"
                }
            },
            mounted:function(){     //在构造器也能创建生命周期
                console.log("创建挂载！！！");
            },
            destroyed:function(){
                console.log("卸载了！！！！");
            },
            updated:function(){
                console.log("更新了！！！");
            },
        });
        //进行挂载到 div =app
        var vm = new han().$mount("#app");
        function destroy(){
            vm.$destroy(); //卸载销毁
        };
        function reload(){
            vm.$forceUpdate();  //更新
        };
        function tick(){
            vm.msg="我是修改后的数据";
            vm.$nextTick(function(){
                console.log('数据修改完成');
            });
        };  
    </script> 
</body>
```
实例事件
```
$on事件 
$once事件 只调用一次
$off事件 关闭事件
<body>
    <h1>实例事件</h1>
    <hr>
    <div id="app">
        {{num}}
        <br>
        <button @click="add()">++++</button>
    </div>
    <button onclick="reduce()">----</button>
    <br>
    <button onclick="onceEvent()">只减一次</button>
    <br>
    <button onclick="off()">关闭事件</button>
    <script type="text/javascript">
        var app=new Vue({
            el:'#app',
            data:{
                num:10
            },
            methods:{
                add:function(){
                    this.num++;
                },
            }
        });
        app.$on("reduce",function(){
            console.log("执行了 reduce 方法");
            this.num--;
        });
        app.$once("onceEvent",function(){
            console.log("执行了 onceEvent 方法");
            this.num--;
        });
        function reduce(){
            app.$emit('reduce');    //$emit外部调用
        };
        function onceEvent(){
            app.$emit('onceEvent'); //$emit外部调用
        }
        function off(){
            app.$off('reduce');     //关闭 reduce事件
        }
    </script>
</body>
```



