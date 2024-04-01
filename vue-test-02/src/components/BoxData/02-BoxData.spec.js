import { mount } from "@vue/test-utils";
import BoxData from "@/components/BoxData";

// https://github.com/vuejs/test-utils/issues/1058
describe("BoxData.vue", () => {
  it("test v-show div", async () => {
    const wraper = mount(BoxData);

    /**
     * 初始化之後再直接改變元件內的值(目前Vue3 conpisitionAPI 不支援，Vue2 optionAPI 才可以用)，
     * 須注意 setData 是非同步的
     */
    await wraper.setData({ isOpen: false });

    expect(wraper.find(".box_data").isVisible()).toBe(false);
  });
});
