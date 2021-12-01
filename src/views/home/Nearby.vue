<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <!-- 跳转的作用 路由的跳转  加了a标签
    :key就是绑定一个id
    :to 路由要去到哪里 去到我的接口上面去跳转页面
    -->
    <router-link  
      v-for="item in nearbyList" 
      :key="item._id"
      :to="`/shop/${item._id}`"
    >
    <!-- 组件 -->
      <ShopInfo 
        :item="item"
      />
    </router-link>
  </div>
</template>

<script>
import { ref } from 'vue'
import { get } from '../../untils/request'
import ShopInfo from '../../components/ShopInfo'

const useNearbyListEffect = () => {
  //存放数据的地方
  const nearbyList = ref([]);
  //获取接口数据
  const getNearbyList = async () => {
    //发送请求 接收数据
    const result = await get('/api/user/hot-list')
    // console.log(result);
    if (result?.errno === 0 && result?.data?.length) {
      // console.log(result);
      nearbyList.value = result.data
    }
  }
  //导出数据和方法
  return { nearbyList, getNearbyList}
}

export default {
  name: 'Nearby',
  components:{ShopInfo},
  setup() {
    const { nearbyList, getNearbyList } = useNearbyListEffect();
    //自执行一下获取附近商家的方法
    getNearbyList();
    return { nearbyList };
  }
}
</script>

<style lang="scss" scoped>
a{text-decoration: none;}
</style>