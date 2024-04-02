import { mount } from "@vue/test-utils";
import App from "@/App.vue";

const mockData = {
  login: "MikeCheng1208",
  id: 7043304,
  node_id: "MDQ6VXNlcjcwNDMzMDQ=",
  avatar_url: "https://avatars.githubusercontent.com/u/7043304?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/MikeCheng1208",
  html_url: "https://github.com/MikeCheng1208",
  followers_url: "https://api.github.com/users/MikeCheng1208/followers",
  following_url:
    "https://api.github.com/users/MikeCheng1208/following{/other_user}",
  gists_url: "https://api.github.com/users/MikeCheng1208/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/MikeCheng1208/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/MikeCheng1208/subscriptions",
  organizations_url: "https://api.github.com/users/MikeCheng1208/orgs",
  repos_url: "https://api.github.com/users/MikeCheng1208/repos",
  events_url: "https://api.github.com/users/MikeCheng1208/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/MikeCheng1208/received_events",
  type: "User",
  site_admin: false,
  name: null,
  company: null,
  blog: "https://www.youtube.com/channel/UC7ArpUezGLX-dZ0FTS_jVMQ",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 60,
  public_gists: 28,
  followers: 221,
  following: 37,
  created_at: "2014-03-24T04:21:10Z",
  updated_at: "2022-02-10T00:16:31Z",
};

const newMock = {
  login: "MikeCheng1208",
  avatar_url: "https://avatars.githubusercontent.com/u/7043304?v=4",
};

/**
 * https://jestjs.io/docs/jest-object#jestmockmodulename-factory-options
 */
jest.mock("./api", () => ({
  getUserData: jest.fn(() => Promise.resolve({ data: mockData })),
}));

describe("App.vue", () => {
  it("test api data", async () => {
    const wrapper = mount(App);
    await wrapper.find("button").trigger("click");

    const preText = JSON.parse(wrapper.find("pre").text());

    expect(preText).toEqual(mockData);
  });
});
