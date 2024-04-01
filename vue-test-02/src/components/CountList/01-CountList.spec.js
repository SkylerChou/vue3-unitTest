import { mount } from "@vue/test-utils";
import { ref } from "vue";
import CountList from "@/components/CountList";

describe("CountList.vue", () => {
  const data = {
    props: {
      count: 100,
    },
    setup(props) {
      const listIdx = ref(555);

      return { listIdx, props };
    },
  };

  it("test data and props", () => {
    const wraper = mount(CountList, data);

    expect(wraper.find("h1").text()).toBe("目前的人數是555人");
    expect(wraper.find("h2").text()).toBe("存款有100元");
  });
});
