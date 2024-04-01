import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue test", () => {
  it("test html render", () => {
    const wrapper = shallowMount(HelloWorld);
    console.log(wrapper.html());
    expect(wrapper.html()).toMatch(
      '<a href="https://cli.vuejs.org" target="_blank" rel="noopener"> vue-cli documentation </a>'
    );
    expect(wrapper.find("a").html()).toMatch(
      '<a href="https://cli.vuejs.org" target="_blank" rel="noopener"> vue-cli documentation </a>'
    );
  });
});
