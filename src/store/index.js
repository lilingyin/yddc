import Vuex from 'vuex'
const setLocalCartList = (state) => {
  const { cartList } = state
  const cartListString = JSON.stringify(cartList)
  localStorage.cartList = cartListString
}

// const getLocaCartList = () => {
//   // { shopId: {shopName:'', productList:{ productId: {} }}}
//   return JSON.parse(localStorage.cartList) || {}
// }
export default Vuex.createStore({
  state: {
    // cartList:{
    // //   //第一层商铺的ID
    // //   shopId:{
    // //     //第二层商品ID
    // //     //第二层的内容就是商品的内容 和 购物车中的数量
    // //     productId:{
    // //       _id:'1',
    // //       name:'波霸奶茶',
    // //       imgUrl:'https://p0.meituan.net/xianfu/677a37e4d54e7c0c1cd52eb96d18cac1762716.jpg@300w',
    // //       sales:15,
    // //       price:3.6,
    // //       oldPrice:9.6,
    // //       count:0
    // //     }
    // //   }
    // }
    // cartList: getLocaCartList()
    cartList:{}
  },
  mutations: {
    changeCartItemInfo(state, payload) {
      // 获取值
      const { shopId, productId, productInfo } = payload
      // shopId的判断
      let shopInfo = state.cartList[shopId]
      if(!shopInfo) { shopInfo = {} }
      // 店铺的ID
      let product = shopInfo[productId]
      // 判断有没有 改不改count
      if(!product) {
        product = productInfo
        product.count = 0
      }
      // 根据传过来的值进行数量的加减
      product.count = product.count + payload.num
      if(payload.num > 0) { product.check = true }
      if(product.count < 0) { product.count = 0 }
      shopInfo[productId] = product
      state.cartList[shopId] = shopInfo
      setLocalCartList(state)
    },
    changeCartItemChecked(state, payload) {
      const { shopId, productId } = payload
      const product = state.cartList[shopId][productId]
      product.check = !product.check
      setLocalCartList(state)
    },
    cleanCartProducts(state, payload) {
      const {shopId} = payload
      state.cartList[shopId] = {}
      state.cartList[shopId]
      setLocalCartList(state)
    },
    setCartItemsChecked(state, payload) {
      const {shopId} = payload
      const products = state.cartList[shopId]
      if(products){
        for(let key in products){
          const product = products[key]
          product.check = true
        }
      }
      setLocalCartList(state)
    },
  }
})
