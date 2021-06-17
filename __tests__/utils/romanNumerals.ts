import {
  isValidNumber,
  isValidRomanNumeral,
  convertToNumber,
  convertToRoman
} from '@/utils/romanNumerals';

// valid numbers
it('should return true for valid numeric inputs', () => {
  const input = 784;
  const result = isValidNumber(input);

  expect(result).toBeTruthy();
});

it('should return false for less than 1 inputs', () => {
  let input = 0;
  let result = isValidNumber(input);
  expect(result).toBeFalsy();

  input = -44;
  result = isValidNumber(input);
  expect(result).toBeFalsy();
});

it('should return false for more than 3999 inputs', () => {
  let input = 4000;
  let result = isValidNumber(input);
  expect(result).toBeFalsy();

  input = 2345678;
  result = isValidNumber(input);
  expect(result).toBeFalsy();
});

// valid numberals
it('should return true for valid numerals', () => {
  const input = 'MMXXI';
  const result = isValidRomanNumeral(input);

  expect(result).toBeTruthy();
});

it('should return false for over-repeats', () => {
  let input = 'MMMMM';
  let result = isValidRomanNumeral(input);
  expect(result).toBeFalsy();

  input = 'LLII';
  result = isValidRomanNumeral(input);
  expect(result).toBeFalsy();
});

it('should return false for bad substitutions', () => {
  let input = 'VL';
  let result = isValidRomanNumeral(input);
  expect(result).toBeFalsy();

  input = 'MXCXXLVI';
  result = isValidRomanNumeral(input);
  expect(result).toBeFalsy();
});

// number -> numeral
it('should convert number to roman numeral - basic', () => {
  const input = 3;
  const result = convertToRoman(input);

  expect(result).toEqual('III');
});

it('should convert number to roman numeral - substitution', () => {
  const input = 47;
  const result = convertToRoman(input);

  expect(result).toEqual('XLVII');
});

it('should convert number to roman numeral - complex', () => {
  const input = 1453;
  const result = convertToRoman(input);

  expect(result).toEqual('MCDLIII');
});

it('should convert number to roman numeral - current year', () => {
  const input = 2021;
  const result = convertToRoman(input);

  expect(result).toEqual('MMXXI');
});

// numeral -> number
it('should convert roman numeral to number - basic', () => {
  const input = 'III';
  const result = convertToNumber(input);

  expect(result).toEqual(3);
});

it('should convert roman numeral to number - substitution', () => {
  const input = 'XLVII';
  const result = convertToNumber(input);

  expect(result).toEqual(47);
});

it('should convert roman numeral to number - complex', () => {
  const input = 'MCDLIII';
  const result = convertToNumber(input);

  expect(result).toEqual(1453);
});

it('should convert roman numeral to number - current year', () => {
  const input = 'MMXXI';
  const result = convertToNumber(input);

  expect(result).toEqual(2021);
});
