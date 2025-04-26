const { convertCase, wordCount, clean, countLowerCaseLetters, countUpperCaseLetters, toCamelCase, toPascalCase } = require("../src/string-utils");

describe("src/string-utils", () => {
  test("convertCase returns correct value", () => {
    expect(convertCase("smallhello", "upper")).toBe("SMALLHELLO");
    expect(convertCase("UPPERHELLO", "small")).toBe("upperhello");
    expect(convertCase("upperhello", "__")).toBe("upperhello");
  });
  test("wordCount returns correct value", () => {
    expect(wordCount("this is me")).toBe(3);
  });
  test("clean returns correct value", () => {
    expect(clean("   hello")).toBe("hello");
  });
  test("countUpperCaseLetters returns correct value", () => {
    expect(countUpperCaseLetters("helloWorRLD")).toBe(4);
  });
  test("countLowerCaseLetters returns correct value", () => {
    expect(countLowerCaseLetters("helloWorRLD")).toBe(7);
  });
  test("toCamelCase returns correct value", () => {
    expect(toCamelCase("hello world")).toBe("helloWorld");
  });
  test("toPascalCase returns correct value", () => {
    expect(toPascalCase("hello world")).toBe("HelloWorld");
  });
});
