import { mount, shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue test", () => {
  it("測試元件 1 - 淺渲染", () => {
    /** 淺渲染只會抓父元件(第一層) */
    const wrapper = shallowMount(App);
    console.log(wrapper.text());

    expect(wrapper.text()).toMatch("Test demo");
  });

  it("測試元件 2 - 深度渲染", () => {
    /** 深度選染會抓父元件跟子元件 */
    const wrapper = mount(App);
    console.log(wrapper.text());

    expect(wrapper.text()).toMatch("Test demo");
  });
});
