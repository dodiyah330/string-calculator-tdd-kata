import { add } from "./calculator";

describe("String Calculator", () => {
  //test for empty string
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  //test for a single number
  test("should return the number itself if only one number is provided", () => {
    expect(add("1")).toBe(1);
  });
});
