<!--局部样式-->
<style lang="scss" scoped>
.layer-header {
  width: 100%;
  .header-wraper {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 50px;
    padding: 0px 20px 0px 20px;
    background-color: white;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
  }
  .content-wraper {
    overflow-x: hidden;
    min-height: 200px;
    margin: 60px 21px 20px 21px;
  }
}
</style>

<!--全局局部覆盖样式-->
<style></style>

<template>
  <div class="layer-header">
    <div class="header-wraper"></div>
    <div class="content-wraper">
      <!-- <div v-for="i in 1" :key="i">
        <span v-for="j in 100" :key="j">你好，世界</span>
      </div> -->
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class LayerHeader extends Vue {
//#region 属性列表
//#endregion

//#region 组件内部对象
//#endregion
//#region 组件绑定数据
//#endregion

//#region 访问器
//#endregion
//#region 自动样式访问器
//#endregion

//#region 页面事件方法
//#endregion
//#region 业务逻辑方法
//#endregion
//#region 数据转换方法
//#endregion
//#region 自动样式方法
//#endregion
//#region 其他方法
//#endregion

//#region 组件生命周期钩子
//#endregion
}
</script>
