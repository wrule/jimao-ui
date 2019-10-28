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

@Component
export default class LayerHeader extends Vue {
  @Prop() private msg!: string;
}
</script>
