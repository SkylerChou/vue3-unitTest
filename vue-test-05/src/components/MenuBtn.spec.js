import { shallowMount } from "@vue/test-utils";
import MenuBtn from "./MenuBtn.vue";
import { createStore } from "vuex";
import { store } from "@/store";

/**
 * 這裡創建的 store 是獨立的，不會跟別的測試裡的 store 互相影響
 */

describe("MenuBtn.vue", () => {
  it("test Vuex action change state", async () => {
    const wrapper = shallowMount(MenuBtn, {
      global: {
        plugins: [createStore(store)],
      },
    });
    await wrapper.find(".menuBtn").trigger("click");
    expect(wrapper.find(".menuBtn").classes().includes("open")).toBe(true);
  });
});
