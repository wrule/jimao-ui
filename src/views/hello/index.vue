<!--局部样式-->
<style lang="scss" scoped>
</style>

<!--全局局部覆盖样式-->
<style></style>

<template>
  <div class="view-hello">
    <layer-header>
      <div style="height: 300px">
        <box-section
          :gray="true">
          <div v-for="i in 15" :key="i">
            <span v-for="j in 10" :key="`${i}${j}`">你好，世界</span>
          </div>
        </box-section>
      </div>
    </layer-header>
  </div>
</template>

<script>
import layer_header from '@/components/layer-header';
import box_section from '@/components/box-section';

export default {
  name: 'view-hello',
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
  components: {
    [layer_header.name]: layer_header,
    [box_section.name]: box_section,
  },
};
</script>
