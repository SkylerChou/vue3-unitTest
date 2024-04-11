import { mount } from "@vue/test-utils";
import TitleBar from "./TitleBar.vue";

describe("TitleBar.vue", () => {
  it("renders slots content", () => {
    const wrapper = mount(TitleBar, {
      slots: {
        default: "今天天氣很好",
        detail: "這是複製的",
      },
    });

    expect(wrapper.find(".title").html()).toBe(
      '<h1 class="title">今天天氣很好</h1>'
    );

    expect(wrapper.find(".detail").html()).toBe(
      '<p class="detail">這是複製的</p>'
    );
  });
});
