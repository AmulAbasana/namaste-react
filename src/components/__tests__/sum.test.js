import { sum } from "../sum";

describe("SUM test cases", () => {
  test("It should return sum of two numbers", () => {
    const result = sum(1, 4);
    expect(result).toBe(5);
  });

  test("It should return error if any of the args is not number", () => {
    try {
      sum("1", 4);
    } catch (e) {
      expect(e).toBe("please provide only number inputs");
    }
  });
});
