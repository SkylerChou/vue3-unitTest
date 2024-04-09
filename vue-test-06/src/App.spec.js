import { mount } from "@vue/test-utils";
import App from "./App.vue";

describe("App.vue", () => {
  it("route test", () => {
    const wrapper = mount(App, {
      global: {
        // 讓測試不會報全域掛載元件的錯，設定全域掛載
        stubs: ["router-link", "router-view"],
      },
    });
  });
});
