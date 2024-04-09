import { mount } from "@vue/test-utils";
import App from "./App.vue";
import { useRoute } from "vue-router";

jest.mock("vue-router", () => ({
  useRoute: jest.fn(() => ({ path: "" })),
}));

describe("App.vue", () => {
  it("route test 1", () => {
    useRoute.mockImplementation(() => ({ path: "/about" }));

    const wrapper = mount(App, {
      global: {
        // 讓測試不會報全域掛載元件的錯，設定全域掛載
        stubs: ["router-link", "router-view"],
      },
    });
    console.log(wrapper.html());
    expect(wrapper.find("#about").classes("active")).toBe(true);
  });
  it("route test 2", () => {
    useRoute.mockImplementation(() => ({ path: "" }));
    const wrapper = mount(App, {
      global: {
        // 讓測試不會報全域掛載元件的錯，設定全域掛載
        stubs: ["router-link", "router-view"],
      },
    });
    console.log(wrapper.html());
    expect(wrapper.find("#home").classes("active")).toBe(true);
  });
  it("route test 3", () => {
    useRoute.mockImplementation(() => ({ path: "/courses" }));
    const wrapper = mount(App, {
      global: {
        // 讓測試不會報全域掛載元件的錯，設定全域掛載
        stubs: ["router-link", "router-view"],
      },
    });
    console.log(wrapper.html());
    expect(wrapper.find("#courses").classes("active")).toBe(true);
  });
});
