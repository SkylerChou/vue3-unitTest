import { createStore } from "vuex";
import { store } from "@/store";

/** 獨立測試 store 裡面的邏輯 */
describe("test Store commit", () => {
  it("test store state", () => {
    const $store = createStore(store);
    $store.dispatch("handleOpenState", true);
    expect($store.state.isOpen).toBe(true);
    expect($store.getters["isOpenAddStr"]).toBe("狀態是 true");
  });
});
