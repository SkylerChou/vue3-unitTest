import { shallowMount } from "@vue/test-utils";
import { createStore } from "vuex";
import { store } from "@/store";
import MenuSlid from "./MenuSlid.vue";

/**
 * 這裡創建的 store 是獨立的，不會跟別的測試裡的 store 互相影響
 */

describe("MenuBtn.vue", () => {
  it("test Vuex action change state", async () => {
    const wrapper = shallowMount(MenuSlid, {
      global: {
        plugins: [createStore(store)],
      },
    });

    expect(wrapper.find(".menu").classes().includes("open")).toBe(false);
    await wrapper.find(".closeBtn").trigger("click");
    expect(wrapper.find(".menu").classes().includes("open")).toBe(true);
  });
});
