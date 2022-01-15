import { filteredArray } from "./index";

describe("filteredArray", () => {
  test("配列aと配列bが一致している要素を取り出す", () => {
    const dummyArrayA = ["a", "b", "c", "d"];
    const dummyArrayB = ["c", "d", "e", "f"];
    expect(filteredArray(dummyArrayA, dummyArrayB)).toEqual(["c", "d"]);
  });
});
