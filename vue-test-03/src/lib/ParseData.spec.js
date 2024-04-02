import { ColorArrPush, ParseData } from "@/lib/ParseData.js";

const searchData = {
  地震: [
    {
      title: "地震 - 中央氣象局",
      link: "https://www.cwb.gov.tw/V7/earthquake/",
      text: "資料來源：美國地質調查所主動發布之全球地震自動定位資訊，透過EMAIL方式通報.本網頁僅展示地震規模大於6之全球地震初步訊息，欲查詢詳細地震資訊請 ...",
    },
  ],
};

const colorArr = ["blue", "white", "black", "yellow"];

describe("ParseData.js", () => {
  it("test 1 demo", () => {
    const newColor = "red";

    /**
     * toContain 檢查陣列有沒有包含這個值(Sting)，並回傳布林值
     */
    expect(ColorArrPush(colorArr, "red")).toContain(newColor);
  });

  it("test 2 demo", () => {
    const obj = {
      title: "123",
      link: "456",
      text: "test demo",
    };
    /**
     * toContainEqual 檢查陣列是否有符合的內容(object)
     */
    expect(ParseData("地震", searchData, obj)["地震"]).toContainEqual(obj);
  });
});
