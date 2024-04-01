import { shallowMount } from "@vue/test-utils";
import UserList from "@/components/UserList.vue";

describe("UserList.vue test",()=>{
  it("test Dom",()=>{
    const wrapper=shallowMount(UserList);
    /**
     * find 只能抓取一個元件
     * findAll 抓取所有符合的元件
     */
    console.log(wrapper.find('.user_list').text());
    // expect(wrapper.findAll(".user_list").at(0).text()).toMatch("員工編號: 399");
    expect(wrapper.findAll(".user_list").length).toBe(6);
  })
})