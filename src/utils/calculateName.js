import { CHALDEAN_MAP } from "../data/chaldeanMap";
import { reduceNumber } from "./reduceNumber";

function calculateSingleName(name = "") {
  const letters = name.toUpperCase().replace(/[^A-Z]/g, "");

  let raw = 0;

  for (const letter of letters) {
    raw += CHALDEAN_MAP[letter] || 0;
  }

  return {
    raw,
    reduced: reduceNumber(raw),
  };
}

export function calculateName(first = "", middle = "", last = "") {
  const firstResult = calculateSingleName(first);

  const middleResult = calculateSingleName(middle);

  const lastResult = calculateSingleName(last);

  const total = firstResult.raw + middleResult.raw + lastResult.raw;

  return {
    first: firstResult,

    middle: middleResult,

    last: lastResult,

    full: {
      raw: total,
      reduced: reduceNumber(total),
    },

    fullName: `${first} ${middle} ${last}`.replace(/\s+/g, " ").trim(),
  };
}
