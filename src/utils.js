import { isPalindrome } from '../utils.js';

describe('isPalindrome', () => {
  it('returns true for a simple palindrome like "racecar"', () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it('returns false for a non-palindrome like "car"', () => {
    expect(isPalindrome("car")).toBe(false);
  });

  it('is case-insensitive: "RaceCar" is a palindrome', () => {
    expect(isPalindrome("RaceCar")).toBe(true);
  });

  it('returns false for empty string', () => {
    expect(() => isPalindrome("")).toThrow("Invalid input");
  });

  it('throws error for non-alphabetic input', () => {
    expect(() => isPalindrome("race123")).toThrow("Invalid input");
  });

  it('throws error when input is not a string', () => {
    expect(() => isPalindrome(12321)).toThrow("Invalid input");
  });
});
