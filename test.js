const {
  sumOfArray,
  findMax,
  countVowels,
  capitalWords,
} = require("./functions");

describe("sumOfArray", () => {
  test("adds numbers correctly", () => {
    expect(sumOfArray([1, 2, 3])).toBe(6);
  });
  test("handles negative numbers", () => {
    expect(sumOfArray([-1, -2, 3])).toBe(0);
  });
  test("returns 0 for empty array", () => {
    expect(sumOfArray([])).toBe(0);
  });
  test("returns 0 for bad input", () => {
    expect(sumOfArray("hello")).toBe(0);
  });
});

describe("findMax", () => {
  test("finds largest number", () => {
    expect(findMax([1, 9, 3])).toBe(9);
  });
  test("works with negatives", () => {
    expect(findMax([-10, -2, -30])).toBe(-2);
  });
  test("returns null for empty array", () => {
    expect(findMax("test")).toBe(null);
  });
});

describe("countVowels", () => {
  test("counts vowels correcctly", () => {
    expect(countVowels("hello")).toBe(2);
  });
  test("handles uppercase letters", () => {
    expect(countVowels("HELLO")).toBe(2);
  });
  test("returns 0 when no vowels", () => {
    expect(countVowels("rhythm")).toBe(0);
  });
  test("works with numbers", () => {
    expect(countVowels(123)).toBe(0);
  });
});

describe("capitalWords", () => {
  test("capitalizes each word", () => {
    expect(capitalWords("hello world")).toBe("Hello World");
  });
  test("handles mixed casing", () => {
    expect(capitalWords("hELLo wORLd")).toBe("Hello World");
  });
  test("handles single word", () => {
    expect(capitalWords("test")).toBe("Test");
  });
  test("handles empty string", () => {
    expect(capitalWords("")).toBe("");
  });
  test("works with numbers", () => {
    expect(capitalWords(123)).toBe("123");
  });
});
