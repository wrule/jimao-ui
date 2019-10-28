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

<script>
export default {
  name: 'box-section',
  props: {
    title: {
      type: String,
      default: '',
    },
    middle: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: '',
    },
    gray: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      //#region 页面对象
      //#endregion
      //#region 页面内容绑定数据
      //#endregion
      //#region 页面样式绑定数据
      //#endregion
    };
  },
  watch: {},
  computed: {
    //#region 常量计算属性
    //#endregion
    //#region 数据转换计算属性
    // 是否显示头部
    autoShowHeader() {
      return !!(this.title || this.middle || this.$slots.right);
    },
    //#endregion
    //#region 样式计算属性
    // 自动计算样式
    autoStyle() {
      const style = {};
      if (this.height) {
        style.height = this.height;
      }
      style['background-color'] = this.gray ? '#f7f7f7' : 'white';
      style['border-color'] = this.gray ? '#eeeeee' : '#efefef';
      return style;
    },
    // 头部样式
    autoHeaderStyle() {
      const style = {};
      style['border-bottom-color'] = this.gray ? '#e9e9e9' : '#f0f0f0';
      return style;
    },
    // 内容区域样式
    autoContentStyle() {
      const style = {};
      if (this.autoShowHeader) {
        style.margin = "0px 0px 2px 0px";
      } else {
        style.margin = "2px 0px 2px 0px";
      }
      return style;
    },
    //#endregion
  },
  methods: {
    //#region 页面事件方法
    //#endregion
    //#region 业务逻辑方法
    //#endregion
    //#region 接口访问方法
    //#endregion
    //#region 数据转换方法
    //#endregion
    //#region 自动样式方法
    //#endregion
    //#region 其他方法
    //#endregion
  },
  created() {},
  mounted() {},
  components: {},
};
</script>
