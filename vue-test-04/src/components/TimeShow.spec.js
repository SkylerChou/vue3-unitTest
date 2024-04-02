import { mount } from "@vue/test-utils";
import TimeShow from "./TimeShow.vue";

/**
 * 透過 jest.mock 攔截第三方函式的內容，來測試所攔截的函是執行結果
 */
jest.mock("../lib", () => ({
  secondsFormat: jest.fn(() => "00:00:00"),
}));

describe("TimeShow.vue", () => {
  it("test lib", () => {
    const wrapper = mount(TimeShow);

    expect(wrapper.find("h1").text()).toBe("time: 00:00:00");
  });
});
