const romanMatrix = new Map([
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
]);

// Converters
export function convertToRoman(num: number): string {
  if (num === 0) {
    return '';
  }

  for (let [val, rom] of romanMatrix.entries()) {
    if (num >= val) {
      return rom + convertToRoman(num - val);
    }
  }

  throw Error(`Somehow you broke the numeral converter! Input was: ${num}`);
}

export function convertToNumber(roman: string): number {
  if (roman === '') {
    return 0;
  }

  for (let [val, rom] of romanMatrix.entries()) {
    if (roman.startsWith(rom)) {
      return val + convertToNumber(roman.replace(rom, ''));
    }
  }

  throw Error(`Somehow you broke the number converter! Input was: ${roman}`);
}

// Validators
export const isValidNumber = (num: number) => 0 < num && num < 4000;

export const isValidRomanNumeral = (roman: string) =>
  /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/.test(roman);
