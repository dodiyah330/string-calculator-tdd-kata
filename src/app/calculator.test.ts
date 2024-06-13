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

  //tests for multiple numbers
  test('should return the sum of multiple numbers', () => {
    expect(add('1,2,3,4')).toBe(10);
  });
});
