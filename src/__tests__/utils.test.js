// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true when the word is the same forward and backward", () => {
    const word = "racecar";

    const result = isPalindrome(word);

    expect(result).toBe(true);
  });
  it("returns false when the word is not the same forward and backward", () => {
    const word = "car";

    const result = isPalindrome(word);

    expect(result).toBe(false);
  });
  it("return true for words that are a combination of uppercase and lowercase letters", () => {
    const word = "RaCecar";

    const result = isPalindrome(word);

    expect(result).toBe(true);
  });
  it("throws an error if the input has any non-alphabetic characters", () => {
    const word = "race car";

    expect(() => isPalindrome(word)).toThrow();
  });
  it("throws an error if the input is an empty string", () => {
    const word = "";

    expect(() => isPalindrome(word)).toThrow();
  });
});
