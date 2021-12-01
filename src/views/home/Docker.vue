<template>
  <div class="docker">
    <!-- item就是遍历的内容 index就是索引 
         :动态class
         'docker__item':true, 默认展示这个类名
         'docker__item--active':index===0 下标为0的时候有样式
    -->
    <div 
      v-for="(item,index) in dockerList" 
      :class = "{'docker__item':true, 'docker__item--active':index===0 }"
      class="docker__item"
      :key="item.icon"
    >
      <div class="iconfont" v-html="item.icon"></div>
      <div class="docker__title">{{item.text}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Docker',
  setup(){
    //声明数组
    const dockerList = [
      {'icon':'&#xe7c6;',text:'首页'},
      {'icon':'&#xe747;',text:'购物车'},
      {'icon':'&#xe713;',text:'订单'},
      {'icon':'&#xe78b;',text:'我的'},
    ];
    //数组导出
    return {dockerList};
  }
}
</script>

<style lang="scss">
@import '../../style/viriables.scss';
.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 .18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .49rem;
  border-top: .01rem solid $content-bgColor;
  color: $content-fontcolor;
  &__item {
    flex: 1;
    text-align: center;
    .iconfont {
      margin: .07rem 0 .02rem 0;
      font-size: .18rem;
    }
    &--active {
      color: rgb(248, 204, 6);
    }
  }
  &__title {
    font-size: .2rem;
    transform: scale(.5, .5);
    transform-origin: center top;
  }
}
</style>