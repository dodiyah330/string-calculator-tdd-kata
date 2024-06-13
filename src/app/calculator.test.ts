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

  //test for two numbers
  test("should return the sum of two numbers", () => {
    expect(add("1,5")).toBe(6);
  });

  //test for multiple numbers
  test("should return the sum of multiple numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  //test for new lines between numbers
  test("should handle new lines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  //test for custom delimiter
  test("should support different delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
  });
});
