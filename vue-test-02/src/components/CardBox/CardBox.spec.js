import { mount } from "@vue/test-utils";
import CardBox from "@/components/CardBox";
import ImageBox from "@/components/CardBox/ImageBox.vue";
import HelloWorld from "@/components/HelloWorld.vue";

/**
 * 除了 find 之外，也可以使用 findComponent 尋找父元件內的子元件
 * findAllComponents 就如同 findAll 回傳 Array，但要特別注意不支援 ref 的查找
 * 詳細使用方式可以參照資料夾圖片 findAllComponents.png / findComponent.png
 */
describe("CardBox test", () => {
  it("test inner component exist", () => {
    const wrapper = mount(CardBox);
    expect(wrapper.findComponent(ImageBox).exists()).toBe(true);
    console.log(wrapper.findAllComponents(ImageBox).at(0));
  });

  it("test inner component nonexistent", () => {
    const wrapper = mount(CardBox);
    expect(wrapper.findComponent(HelloWorld).exists()).toBe(false);
  });
});
