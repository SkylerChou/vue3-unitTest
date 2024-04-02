import { mount } from "@vue/test-utils";
import InputBar from "@/components/InputBar";

describe("InputBar.vue", () => {
  it("test input data", () => {
    const wraper = mount(InputBar);
    wraper.find("input.name").setValue("Skyler");
    wraper.find("input.email").setValue("Skyler@gmail.com");
    expect(wraper.find("input.name").element.value).toBe("Skyler");
    expect(wraper.find("input.email").element.value).toBe("Skyler@gmail.com");
  });

  it("test thousand", async () => {
    const wraper = mount(InputBar);
    await wraper.setProps({ thousand: 1345000 });

    expect(wraper.find("input.num").element.value).toBe("1,345,000");
  });
});
