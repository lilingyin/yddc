<template>
    <div class="wrapper">
        <!-- 头部的组件 -->
        <StaticPart />
        <!-- 附近商家组件 -->
        <Nearby />
    </div>
    <!-- 底部导航组件 -->
    <Docker />
</template>
<script>
// .vue .js文件的后缀名都可以省略
import StaticPart from './StaticPart'
import Nearby from './Nearby'
import Docker from './Docker'

export default{
    name:'Home',
    //组件名字放在这里
    components:{StaticPart,Nearby,Docker}
}
</script>
<style lang="scss" scoped>
// scoped 防止组件之前的样式重名后互相影响
    .wrapper{
        overflow-y:auto;
        position: absolute;
        left:0;
        top:0;
        bottom: .5rem;
        right:0;
        padding: 0 .18rem .1rem .18rem;
        
    }
</style>