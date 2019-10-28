<!--局部样式-->
<style lang="scss" scoped>
.box-section {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 70px;
  background-color: white;
  border: solid 1px;
  border-radius: 1px;
  .box-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 39px;
    min-height: 39px;
    padding: 0px 10px 0px 10px;
    border-bottom: solid 1px;
    .left-wraper {
      font-size: 17px;
      font-weight: 500;
    }
    .middle-wraper {
      font-size: 17px;
      font-weight: bolder;
    }
    .right-wraper {}
  }
  .box-content {
    flex: 1;
    overflow-y: auto;
    padding: 5px 12px 5px 12px;
  }
}
</style>

<!--全局局部覆盖样式-->
<style></style>

<template>
  <div
    class="box-section"
    :style="autoStyle">
    <div
      v-if="autoShowHeader"
      class="box-header"
      :style="autoHeaderStyle">
      <div class="left-wraper">
        <slot name="title">
          <span v-if="title">{{title}}</span>
        </slot>
      </div>
      <div class="middle-wraper">
        <slot name="middle">
          <span v-if="middle">{{middle}}</span>
        </slot>
      </div>
      <div class="right-wraper">
        <slot name="right" />
      </div>
    </div>
    <div
      class="box-content"
      :style="autoContentStyle">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class BoxSection extends Vue {
//#region 属性列表
  @Prop() private title!: string;
  @Prop() private middle!: string;
  @Prop() private height!: string;
  @Prop() private gray!: boolean;
//#endregion

//#region 组件内部对象
//#endregion
//#region 组件绑定数据
//#endregion

//#region 访问器
  // 是否显示头部
  public get autoShowHeader(): boolean {
    return !!(this.title || this.middle || this.$slots.right);
  }
//#endregion
//#region 自动样式访问器
  // 自动计算样式
  public get autoStyle(): any {
    const style: any = {};
    if (this.height) {
      style.height = this.height;
    }
    style['background-color'] = this.gray ? '#f7f7f7' : 'white';
    style['border-color'] = this.gray ? '#eeeeee' : '#efefef';
    return style;
  }
  // 自动计算头部样式
  public get autoHeaderStyle(): any {
      const style: any = {};
      style['border-bottom-color'] = this.gray ? '#e9e9e9' : '#f0f0f0';
      return style;
  }
  // 自动计算内容区域样式
  public get autoContentStyle(): any {
    const style: any = {};
    if (this.autoShowHeader) {
      style.margin = '0px 0px 2px 0px';
    } else {
      style.margin = '2px 0px 2px 0px';
    }
    return style;
  }
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
  // 组件创建
  public created(): void {}
  // 组件挂载
  public mounted(): void {}
//#endregion
}
</script>
