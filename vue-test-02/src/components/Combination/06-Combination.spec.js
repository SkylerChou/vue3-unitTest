import { mount } from "@vue/test-utils";
import Combination from "@/components/Combination";

describe("Combination.vue", () => {
  it("test emit", async () => {
    const wraper = mount(Combination);
    await wraper.setProps({ thousand: 1000000 });
    await wraper.find("button").trigger("click");
    console.log(wraper.emitted("Combination"));
    expect(wraper.emitted("Combination").at(0).at(0)).toBe("1,000,000");
  });
});
