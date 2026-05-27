export function reduceNumber(number) {
  let value = Math.abs(Number(number));

  while (value > 9) {
    value = String(value)
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0);
  }

  return value;
}
