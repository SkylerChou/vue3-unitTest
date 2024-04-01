import { shallowMount } from "@vue/test-utils";
import PhotoItem from "@/components/PhotoItem";

describe("PhotoItem test", () => {
  it("DOM is v-if or v-show check hide", () => {
    const wrapper = shallowMount(PhotoItem);
    /**
     * 需要注意 v-show 回直接渲染在畫面上但是是註解的狀態永遠都是 true，要使用 isVisible 判斷
     */
    expect(wrapper.find("#box1").exists()).toBe(false);
    expect(wrapper.find("#box2").isVisible()).toBe(false);
  });
});
