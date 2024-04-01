import { shallowMount } from "@vue/test-utils";
import Content from "@/components/CardBox/Content.vue";

describe("Content.vue test", () => {
  it("check class is red", () => {
    const wrapper = shallowMount(Content);
    console.log(wrapper.find("h1").classes());

    // expect(wrapper.find("h1").classes().includes("red")).toBe(true);
    /** 優化寫法，直接給在 classes 方法裡面做判斷 */
    expect(wrapper.find("h1").classes("red")).toBe(true);
  });

  it("button is disable attr", () => {
    const wrapper = shallowMount(Content);
    expect(wrapper.find("a").attributes("href")).toBe("javascript:;");
  });
});
