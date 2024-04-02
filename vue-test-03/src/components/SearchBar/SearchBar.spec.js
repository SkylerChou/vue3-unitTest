import { mount } from "@vue/test-utils";
import SearchBar from "@/components/SearchBar";

describe("SearchBar.vue", () => {
  it("test demo1", async () => {
    const wrapper = mount(SearchBar);

    expect(wrapper.find(".title").text()).toBe(
      "Vue 單元測試 vue-test-utils｜入門"
    );

    await wrapper.find(".text3").trigger("click");

    const titleArr = [
      "館長成吉思汗- YouTube",
      "陳之漢- 维基百科，自由的百科全書",
    ];

    wrapper.findAll(".title").forEach((item, idx) => {
      expect(item.text()).toBe(titleArr[idx]);
    });
  });
});
