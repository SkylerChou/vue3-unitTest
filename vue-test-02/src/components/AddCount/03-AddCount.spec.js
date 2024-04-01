import { shallowMount } from "@vue/test-utils";
import AddCount from "@/components/AddCount";

describe("AddCount.vue", () => {
  it("add number", async () => {
    const wraper = shallowMount(AddCount);

    /**
     * trigger 是後天的動作，也是非同步的方法
     */
    await wraper.find(".add_btn").trigger("click");

    expect(wraper.find(".count_title").text()).toBe("1");

    await wraper.find(".add_btn").trigger("click");
    expect(wraper.find(".count_title").text()).toBe("2");
  });
  it("remove number", async () => {
    const wraper = shallowMount(AddCount);
    await wraper.find(".remove_btn").trigger("click");
    expect(wraper.find(".count_title").text()).toBe("-1");
    await wraper.find(".remove_btn").trigger("click");
    expect(wraper.find(".count_title").text()).toBe("-2");
  });
});
