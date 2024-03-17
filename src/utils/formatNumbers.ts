import numeral from "numeral";

type InputValue = string | number | null;

export function fPercent(number: InputValue) {
  const format = number ? numeral(Number(number) / 100).format("0.0%") : "";

  return result(format, ".0");
}

function result(format: string, key = ".00") {
  const isInteger = format.includes(key);

  return isInteger ? format.replace(key, "") : format;
}

export function fNumber(number: InputValue) {
  return numeral(number).format();
}

export function fCurrency(number: InputValue) {
  const startWIth = 0;
  const format = number
    ? `₹${numeral(number).format(`0,${startWIth.toFixed(2)}`)}`
    : `£${startWIth.toFixed(2)}`;
  return result(format, ".00");
}
