import { createStore } from "vuex";
import { store } from "@/store";

const createStoreDefault = (initState) => {
  return createStore({
    state() {
      return {
        ...initState,
      };
    },
    actions: {
      addCount(context) {
        context.commit("addCount");
      },
    },
    mutations: {
      addCount(state) {
        state.count++;
      },
    },
  });
};

/** 獨立測試 store 裡面的邏輯 */
describe("test Store commit", () => {
  it("test store state", () => {
    const $store = createStore(store);
    $store.dispatch("handleOpenState", true);
    expect($store.state.isOpen).toBe(true);
    expect($store.getters["isOpenAddStr"]).toBe("狀態是 true");
  });

  it("test default store state 1", () => {
    const $store = createStoreDefault({ count: 3 });
    console.log("1=>", $store.state.count);
    $store.dispatch("addCount");
    expect($store.state.count).toBe(4);
  });

  it("test default store state 2", () => {
    const $store = createStoreDefault({ count: 8 });
    $store.dispatch("addCount");
    expect($store.state.count).toBe(9);
    console.log("2=>", $store.state.count);
  });
});
