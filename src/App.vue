<!--局部样式-->
<style lang="scss" scoped>
.app {
  width: 100%;
}
</style>

<!--全局局部覆盖样式-->
<style>
  html, body {
    margin: 0px;
    padding: 0px;
    width: 100%;
    min-width: 1000px;
    overflow-x: auto;
    overflow-y: auto;
    font-size: 14px;
    font-family:
      PingFangSC-regular,
      Helvetica Neue,
      Helvetica,
      Hiragino Sans GB,
      Microsoft YaHei;
    color: #333;
    background-color: #f0f2f5;
  }
  div {
    box-sizing: border-box;
  }
  ul {
    list-style-type: none;
    margin: 0px;
    padding: 0px;
  }
</style>

<template>
  <div class="app" id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  props: {},
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
    //#endregion
    //#region 样式计算属性
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
