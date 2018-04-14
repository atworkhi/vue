<template>
  <div class="pos">
    <el-row>
      <el-col :span='7' class="pos-order" id="order-all">
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table :data="tableData" border height="250" style="100%">
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="count" label="数量" width='50'></el-table-column>
              <el-table-column prop="price" label="金额" width='70'></el-table-column>
              <el-table-column label="操作" width='100' fixed='right'>
                <template slot-scope="scope">
                      <el-button type="text" size="small" @click="deleteGoods(scope.row)">删除</el-button>
                      <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
</template>
              </el-table-column>
            </el-table>
            <hr>
            <div class="total">
              <small>数量：</small><span style="color:red">{{totalCount}}</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<small>金额：</small><span style="color:red">{{totalMoney}}</span>元
            </div>
            <hr>
            <div class="option">
              <el-button type="success" @click="checkout">结账</el-button>
              <el-button type="info">挂单</el-button>
              <el-button type="warning">外卖</el-button>
              <el-button type="danger" @click="delAllGoods()">删除</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单">
            挂单
          </el-tab-pane>
          <el-tab-pane label="外卖">
            外卖
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <!-- 商品展示 -->
      <el-col :span='16'>
        <div class="hot">
         <div class="hot-title">热销商品：</div>
         <div class="hot-list">
           <ul>
            <li v-for = "(item,index) in hotgoods" :key="index" @click="addOrderList(item)">
              <span>{{item.goodsName}}</span><span class="price">￥{{item.price}}元</span>
            </li>
           </ul>
         </div>
        </div>
        <div class="goodsall">
          <el-tabs>
            <el-tab-pane label="主食类">
              <div>
                <li class="cooklist" v-for="(item,cooklist0) in type0goods" :key="cooklist0" @click="addOrderList(item)">
                  <span class="goodsImg"><img :src="item.goodsImg" width="100%" /></span>
                  <span class="goodsName">{{item.goodsName}}</span>
                  <span class="goodsPrice">￥{{item.price}}元</span>
                </li>
              </div>
            </el-tab-pane>
            <el-tab-pane label="零食类">
              <div>
                <li class="cooklist" v-for="(item,index1) in type1goods" :key="index1" @click="addOrderList(item)">
                  <span class="goodsImg"><img :src="item.goodsImg" width="100%" /></span>
                  <span class="goodsName">{{item.goodsName}}</span>
                  <span class="goodsPrice">￥{{item.price}}元</span>
                </li>
              </div>
            </el-tab-pane>
            <el-tab-pane label="饮料类">
               <div>
                <li class="cooklist" v-for="(item,index2) in type2goods" :key="index2" @click="addOrderList(item)">
                  <span class="goodsImg"><img :src="item.goodsImg" width="100%" /></span>
                  <span class="goodsName">{{item.goodsName}}</span>
                  <span class="goodsPrice">￥{{item.price}}元</span>
                </li>
              </div>
            </el-tab-pane>
            <el-tab-pane label="套餐类">
              <div>
                <li class="cooklist" v-for="(item,index3) in type3goods" :key="index3" @click="addOrderList(item)">
                  <span class="goodsImg"><img :src="item.goodsImg" width="100%" /></span>
                  <span class="goodsName">{{item.goodsName}}</span>
                  <span class="goodsPrice">￥{{item.price}}元</span>
                </li>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ax from 'axios'
export default {
  name: 'pos',
  // 初始化参数
  data () {
    return {
      // 订单数据
      tableData: [],
      // 热销商品
      hotgoods: [],
      // 主食类
      type0goods: [],
      type1goods: [],
      type2goods: [],
      type3goods: [],
      // 一共多少件
      totalCount: 0,
      // 一共花费多少钱
      totalMoney: 0
    }
  },
  // 引用axios 在创建的时候引用
  created: function () {
    // get获取
    ax.get('http://jspang.com/DemoApi/oftenGoods.php').then(reponse => {
      console.log(reponse)
      this.hotgoods = reponse.data
    }).catch(error => {
      console.log(error)
      alert('网络错误，请重试！！')
    })
    ax.get('http://jspang.com/DemoApi/typeGoods.php').then(reponse => {
      this.type0goods = reponse.data[0]
      this.type1goods = reponse.data[1]
      this.type2goods = reponse.data[2]
      this.type3goods = reponse.data[3]
    }).catch(error => {
      console.log(error)
      alert('网络错误，请重试！！')
    })
  },
  // 需要此样式在载入时生效，需要声明周期加入时调用此函数,获取订单的高度
  mounted: function () {
    var orderHeight = document.body.clientHeight
    document.getElementById('order-all').style.height = orderHeight + 'px'
  },
  methods: {
    // 点击添加商品
    addOrderList (goods) {
      this.totalCount = 0
      this.totalMoney = 0
      // 判断订单是否存在商品 存在则+1 不存在则新建
      let isHave = false
      for (let i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].goodsId === goods.goodsId) {
          // console.log(goods.goodsId)
          isHave = true
        }
      }
      if (isHave) {
        // 改变购物车中的数量与价钱
        let arr = this.tableData.filter(o => o.goodsId === goods.goodsId)
        // console.log(goods.goodsId + '--' + goods.goodsName + '--' + goods.price)
        arr[0].count++
        arr[0].price += goods.price
      } else {
        // 新商品
        let newGoods = {
          goodsId: goods.goodsId,
          goodsName: goods.goodsName,
          price: goods.price,
          count: 1
        }
        // console.log(goods.goodsId + '--' + goods.goodsName + '--' + goods.price)
        // 新商品放入
        this.tableData.push(newGoods)
      }
      this.resultMoney()
    },
    // 删除单个商品
    deleteGoods (goods) {
      this.tableData = this.tableData.filter(o => o.goodsId !== goods.goodsId)
      // 金额和总数量的从新计算
      this.resultMoney()
    },
    // 删除全部商品
    delAllGoods () {
      // 清零商品列表 总数 与金钱
      this.tableData = []
      this.totalCount = 0
      this.totalMoney = 0
    },
    // 结账
    checkout () {
      // 判断是否有商品
      if (this.totalCount !== 0) {
        // 清零商品列表 总数 与金钱
        this.tableData = []
        this.totalCount = 0
        this.totalMoney = 0
        this.$message({
          message: '结账成功!谢谢光临！',
          type: 'success'
        })
      } else {
        this.$message({
          message: '不要点我啊！！',
          type: 'warning'
        })
      }
    },
    // 金额与总数
    resultMoney () {
      this.totalCount = 0
      this.totalMoney = 0
      if (this.tableData) {
        this.tableData.forEach(element => {
          this.totalCount += element.count
          this.totalMoney += element.price
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pos-order {
    /* 订单模块的背景色 */
    background-color: #f9fafc;
    border-right: 1px solid #c0ccda;
    margin-left: 5px;
  }
  .option {
    margin-top: 10px
  }
  .hot-title {
    height: 20px;
    border-bottom: 1px solid #d3dce6;
    background-color: #f9fafc;
    padding: 10px;
    text-align: left
  }
  .hot-list ul li {
    list-style: none;
    float: left;
    border: 1px solid #e6e9f0;
    padding: 10px;
    margin: 10px;
    background-color: #FFF;
  }
  .price {
    color: red;
  }
  .goodsall {
    clear: both;
    margin-left: 10px;
  }
  .cooklist {
    list-style: none;
    width: 23%;
    border: 1px solid #e5e9f2;
    height: auto;
    overflow: hidden;
    background-color: #fff;
    padding: 2px;
    float: left;
    margin: 2px;
    cursor: pointer;
  }
  .cooklist span {
    display: block;
    float: left;
  }
  .goodsImg {
    width: 40%;
  }
  .goodsName {
    font-size: 18px;
    padding-left: 10px;
    color: brown;
  }
  .goodsPrice {
    font-size: 16px;
    padding-left: 10px;
    padding-top: 10px;
  }
  .total {
    background-color: #fff;
    padding: 10px;
    border: 1px solid #e5e9f2
  }
</style>
