<template>
  <div class="position">
    <span class="iconfont position__icon">&#xe602;</span>
    东街二楼包子铺
    <span class="iconfont position_notice">&#xe619;</span>
  </div>
  <div class="search">
    <span class="iconfont">&#xe741;</span>
    <span class="search__text">包子一块钱10个</span>
  </div>
  <div class="banner">
    <img
      class="banner__img"
      src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.zhimg.com%2Fv2-539606a1d3f4468c0ade1132ff6ef711_1440w.jpg%3Fsource%3D172ae18b&refer=http%3A%2F%2Fpic1.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636792715&t=4a5663a39c1d8da209d3f40650c71157"
    />
  </div>
  <div class="icons">
    <div class="icons__item">
      <img
        class="icons__item__img"
        src="https://p0.meituan.net/jungle/c6213db2a0bbc6b7342074e9eb51ca4a12844.png@176w"
      />
      <p class="icons__item__desc">美食</p>
    </div>
    <div class="icons__item">
      <img
        class="icons__item__img"
        src="https://p1.meituan.net/jungle/aa9188bd501bdd83220b83ee662473ac12129.png@176w"
      />
      <p class="icons__item__desc">美团超市</p>
    </div>
    <div class="icons__item">
      <img
        class="icons__item__img"
        src="https://p0.meituan.net/jungle/84154e5477cc35b12d0e31d55924edb916525.png@176w"
      />
      <p class="icons__item__desc">生鲜果蔬</p>
    </div>
    <div class="icons__item">
      <img
        class="icons__item__img"
        src="https://p0.meituan.net/jungle/325483c15c7e9550a43c917510bfcc6612958.png@176w"
      />
      <p class="icons__item__desc">美团专送</p>
    </div>
    <div class="icons__item">
      <img
        class="icons__item__img"
        src="https://p1.meituan.net/jungle/83bfbcf07221cb1ccbcd9114e81ec7ac9209.png@176w"
      />
      <p class="icons__item__desc">快食简餐</p>
    </div>
    <div class="icons__item">
      <img
        class="icons__item__img"
        src="https://p0.meituan.net/jungle/7c3478c6067e37c2b41642f744dc9b8c13342.png@176w"
      />
      <p class="icons__item__desc">下午茶</p>
    </div>
    <div class="icons__item">
      <img
        class="icons__item__img"
        src="https://p0.meituan.net/jungle/5e81ea57170a6023ccda4058ec2d4dfe11935.png@176w"
      />
      <p class="icons__item__desc">汉堡披萨</p>
    </div>
    <div class="icons__item">
      <img
        class="icons__item__img"
        src="https://p1.meituan.net/jungle/4ec8dbe9a2efd9817d6a54f1bfed08ca13971.png@176w"
      />
      <p class="icons__item__desc">家常菜</p>
    </div>
    <div class="icons__item">
      <img
        class="icons__item__img"
        src="https://p0.meituan.net/jungle/d072d7a9fdaae683c1a8a5f17cb99c4e11795.png@176w"
      />
      <p class="icons__item__desc">小吃馆</p>
    </div>
    <div class="icons__item">
      <img
        class="icons__item__img"
        src="https://p1.meituan.net/jungle/58ffd634fa6dddf05972d2cf2c57733f14610.png@176w"
      />
      <p class="icons__item__desc">鲜花蛋糕</p>
    </div>
  </div>
  <div class="gap"></div>
</template>
<script>
export default {
  name: 'StaticPart'
}
</script>

<style lang="scss">
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.position {
  position: relative;
  padding: .16rem .24rem .16rem 0;
  line-height: .22rem;
  font-size: .16rem;
  @include ellipsis;
  .position__icon {
    position: relative;
    top: .01rem;
    font-size: .2rem;
  }
  .position_notice {
    position: absolute;
    right: 0;
    top: .17rem;
    font-size: .2rem;
  }
  color: $content-fontcolor;
}
.search {
  margin-bottom: .12rem;
  line-height: .32rem;
  background: #F5F5F5;
  color: #B7B7B7;
  border-radius: .16rem;
  .iconfont {
    display: inline-block;
    padding: 0 .08rem 0 .16rem;
    font-size: .16rem;
  }
  &__text {
    display: inline-block;
    font-size: .14rem;
  }
}
.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  &__img {
    width: 100%;
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: .16rem;
  &__item {
    width: 20%;
    &__img {
      display:block;
      width: .4rem;
      height: .4rem;
      margin: 0 auto;
    }
    &__desc {
      margin: .06rem 0 .16rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}
.gap {
  margin: 0 -.18rem;
  height: .1rem;
  background: $content-bgColor;
}
</style>