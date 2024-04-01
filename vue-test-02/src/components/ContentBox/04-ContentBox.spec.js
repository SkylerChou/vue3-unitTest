import { mount } from "@vue/test-utils";
import ContentBox from "@/components/ContentBox";

describe("ContentBox.vue", () => {
  it("test props", async () => {
    const wraper = mount(ContentBox);

    /**
     * setup 裡面的東西都不能用 set 相關方法設定
     */
    await wraper.setProps({ isOpen: false });

    expect(wraper.find(".box").isVisible()).toBe(false);
  });
});
