<!--局部样式-->
<style lang="scss" scoped>
</style>

<!--全局局部覆盖样式-->
<style></style>

<template>
  <div class="view-hello">
    <layer-header :msg="123">
      <div style="height: 300px">
        <box-section
          title="请求量">
          <div v-for="i in 15" :key="i">
            <span v-for="j in 10" :key="`${i}${j}`">你好，世界</span>
          </div>
        </box-section>
      </div>
    </layer-header>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import LayerHeader from '@/components/LayerHeader/index.vue';

@Component({
  components: {
    LayerHeader,
  },
})
export default class ViewHello extends Vue {
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