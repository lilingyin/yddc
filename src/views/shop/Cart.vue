<template>
  <!-- 是否显示蒙版 -->
  <div class="mask" v-if="showCart"></div>
  <div class="cart">
    <!-- 是否显示清空购物车和全选按钮 -->
    <div class="product" v-if="showCart">
      <div class="product__header">
        <div
          class="product__header__all"
          @click="() => setCartItemsChecked(shopId)"
        >
        <!--  setCartItemsChecked 全选按钮的功能
        v-html="allChecked ? '&#xe657;': '&#xe603;'" 是否全选图标的展示
        -->
          <span
            class="product__header__icon iconfont"
            v-html="allChecked ? '&#xe657;': '&#xe603;'"
          >
          </span>
          全选
        </div>
        <div
          class="product__header__clear"
          @click="() => cleanCartProducts(shopId)"
        >清空购物车</div>
      </div>
    
      <div
        v-for="item in productList"
        :key="item._id"
      >
        <div class="product__item" v-if="item.count > 0">
          <div class="iconfont product__item__checked"
            v-html="item.check ? '&#xe657;' : '&#xe603;'"
            @click="()=>{changeCartItemChecked(shopId,item._id)}"
          >
          </div>
          <img class="product__item__img" :src="item.imgUrl" />
          <div class="product__item__detail">
            <h4 class="product__item__title">{{item.name}}</h4>
            <p class="product__item__price">
              <span class="product__item__yen">&yen;</span>{{item.price}}
              <span class="product__item__origin">&yen;{{item.oldPrice}}</span>
            </p>
          </div>
          <div class="product__number">
            <span
              class="product__number__minus"
              @click="() => { changeCartItemInfo(shopId, item._id, item, -1) }"
            >-</span>
              {{item.count || 0}}
            <span
              class="product__number__plus"
              @click="() => { changeCartItemInfo(shopId, item._id, item, 1) }"
            >+</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="check">
      <div class="check__icon">
        <img
          src="https://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:9096d347/34088a7505729ed54cdfcf1ee9c3d15d.png"
          class="check__icon__img"
          @click="handleCartShowChange"
        />
        <!-- handleCartShowChange 点击购物车是否显示商品 -->
        <div class="check__icon__tag">{{total}}</div>
      </div>
      <div class="check__info">
        总计：<span class="check__info__price">&yen; {{price}}</span>
      </div>
      <div class="check__btn">去结算</div>
    </div>
  </div>
  
</template>

<script>
import {computed,ref} from 'vue'
import {useStore} from 'vuex'
import {useRoute} from 'vue-router'
import {useCommonCartEffect} from './commonCartEffect'
//获取购物车商品的逻辑处理
const useCartEffect = (shopId)=>{
  const {changeCartItemInfo} = useCommonCartEffect();
  const store = useStore();
  const cartList = store.state.cartList
  //计算商品数量
  const total = computed(()=>{
    const productList = cartList[shopId]
    // console.log(productList)
    let count = 0
    if(productList){
      for( let i in productList){
        const product = productList[i]
        if(product.check){
          count+=product.count
        }
      }
    }
    return count
  })
  //计算商品总价
  const price =computed(()=>{
    const productList = cartList[shopId]
    let count = 0
    if(productList){
      for( let i in productList){
        const product = productList[i]
        if(product.check){
          // 反选的信息要做一下判断
          count += (product.count*product.price)
        }
      }
    }
    return count.toFixed(2)
  })
  //计算购物车展示的内容
  const productList = computed(() => {
      const productList = cartList[shopId] || []
      return productList
  })
  //计算全选还是没全选
  const allChecked = computed(()=>{
    const productList = cartList[shopId];
    let result = true;
    if(productList){
      for(let i in productList){
        const product = productList[i]
        if(product.count > 0 && !product.check){
          result = false
        }
      }
    }
    // console.log(result);
    return result
  })
  //选择购物车中的内容
  const changeCartItemChecked = (shopId,productId)=>{
    store.commit('changeCartItemChecked',{shopId,productId})
  }
  //清空购物车
  const cleanCartProducts = (shopId)=>{
    store.commit('cleanCartProducts',{shopId})
  }
  //全选功能
  const setCartItemsChecked = (shopId)=>{
    store.commit('setCartItemsChecked',{shopId})
  }
  return {
    total,price,productList,allChecked,
    changeCartItemChecked,changeCartItemInfo,
    cleanCartProducts,setCartItemsChecked
    }
}
export default {
  name: 'Cart',
  setup() {
    const route = useRoute();
    const shopId = route.params.id;
    const showCart = ref(false);
    const handleCartShowChange = ()=>{
      showCart.value = ! showCart.value
    }
    const { 
      total, price, productList, setCartItemsChecked,allChecked,
      changeCartItemInfo, changeCartItemChecked ,cleanCartProducts} = useCartEffect(shopId)
    return { 
      total, price, shopId, productList, showCart,
      changeCartItemInfo, changeCartItemChecked,
      cleanCartProducts,setCartItemsChecked,allChecked,
      handleCartShowChange
      }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.mask{
  position: fixed;
  left:0;
  right:0;
  top:0;
  bottom:0;
  background: rgba(0,0,0,0.5);
  z-index:1;
}
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
}
.product {
  overflow-y: scroll;
  flex: 1;
  background: #FFF;
  &__header {
    display: flex;
    line-height: .52rem;
    border-bottom: 1px solid #F1F1F1;
    font-size: .14rem;
    color: #333;
    &__all {
      width: .64rem;
      margin-left: .18rem;
    }
    &__icon {
      display: inline-block;
      color: #0091FF;
      font-size: .2rem;
    }
    &__clear {
      flex: 1;
      margin-right: .16rem;
      text-align: right;
    }
  }
  &__item {
    position: relative;
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;
    border-bottom: .01rem solid $content-bgColor;
    &__checked{
      margin:.1rem .1rem 0 0;

    }
    &__detail {
      overflow: hidden;
    }
    &__img {
      width: .46rem;
      height: .46rem;
      margin-right: .16rem;
    }
    &__title {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }
    &__price {
      margin: .06rem 0 0 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $hightlight-fontColor;
    }
    &__yen {
      font-size: .12rem;
    }
    &__origin {
      margin-left: .06rem;
      line-height: .2rem;
      font-size: .12rem;
      color: $light-fontColor;
      text-decoration: line-through;
    }
    .product__number {
      position: absolute;
      right: 0;
      bottom: .12rem;
      &__minus, &__plus
       {
        display: inline-block;
        width: .2rem;
        height: .2rem;
        line-height: .16rem;;
        border-radius: 50%;
        font-size: .2rem;
        text-align: center;
      }
      &__minus {
        border: .01rem solid $medium-fontColor;
        color: $medium-fontColor;
        margin-right: .05rem;
      }
      &__plus {
        background: $btn-bgColor;
        color: $bgColor;
        margin-left: .05rem;
      }
    }
  }
}
.check {
  display: flex;
  height: .49rem;
  border-top: .01rem solid $content-bgColor;
  line-height: .49rem;
  background: #FFF;
  &__icon {
    position: relative;
    width: .84rem;
    &__img {
      display: block;
      margin: .12rem auto;
      width: .28rem;
      height: .26rem;
    }
    &__tag {
      position: absolute;
      left: .46rem;
      top: .04rem;
      padding: 0 .04rem;
      min-width: .2rem;
      height: .2rem;
      line-height: .2rem;
      background-color: $hightlight-fontColor;
      border-radius: .1rem;
      font-size: .12rem;
      text-align: center;
      color: #fff;
      transform: scale(.5);
      transform-origin: left center;
    }
  }
  &__info {
    flex: 1;
    color: $content-fontcolor;
    font-size: .12rem;
    &__price {
      line-height: .49rem;
      color: $hightlight-fontColor;
      font-size: .18rem;
    }
  }
  &__btn {
    width: .98rem;
    background-color: #4FB0F9;
    text-align: center;
    color: #FFF;
    font-size: .14rem;
  }
}
</style>