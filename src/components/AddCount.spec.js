import { shallowMount } from "@vue/test-utils";
import AddCount from "@/components/AddCount.vue";

describe("AddCount.vue test", () => {
  it("test 1", () => {
    const wrapper = shallowMount(AddCount);
    /**
     * find => 如果找不到元素不會報錯 ( 結果報錯 )
     * get => 如果找不到元素會報錯 ( 中斷測試執行 )
     */
    // expect(wrapper.get(".add-btn-error").exists()).toBe(true)
    expect(wrapper.find(".add-btn").exists()).toBe(true);
  });
});
