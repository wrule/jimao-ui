// 插件构造类
export default class PluginBuilder {
  private component: any;

  public get install(): (vue: any) => void {
    return (Vue: any) => {
      Vue.component(this.component.name, this.component);
    };
  }

  public constructor(component: any) {
    this.component = component;
  }
}