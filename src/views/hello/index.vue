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

@Component
export default class ViewHello extends Vue {
  @Prop() private msg!: string;
}
</script>