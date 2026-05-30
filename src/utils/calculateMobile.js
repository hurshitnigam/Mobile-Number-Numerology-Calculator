import {
  POSITIVE_PAIRS,
  NEGATIVE_PAIRS,
  NEUTRAL_PAIRS,
  PROBLEMS,
} from "../data/mobilePairs";

import { reduceNumber } from "./reduceNumber";

import { PositivePairEffects } from "../data/positivePairEffects";

export function calculateMobile(mobile = "") {
  const digits = mobile.replace(/[^0-9]/g, "");

  const pairs = [];

  for (let i = 0; i < digits.length - 1; i++) {
    pairs.push(
      digits[i] + digits[i + 1]
    );
  }

  const positive = [];

  const neutral = [];

  const negative = [];

  pairs.forEach((pair) => {
    if (
      POSITIVE_PAIRS.includes(pair)
    ) {
      positive.push(pair);
    } else if (
      NEGATIVE_PAIRS.includes(pair)
    ) {
      negative.push({
        pair,
        problem:
          PROBLEMS[pair] || "",
      });
    } else {
      neutral.push(pair);
    }
  });

  const positiveBenefits =
    positive.map((pair) => ({
      pair,
      benefit:
        PositivePairEffects[pair] ||
        "Positive combination",
    }));

  const raw = digits
    .split("")
    .reduce(
      (sum, digit) =>
        sum + Number(digit),
      0
    );

  return {
    digits,

    raw,

    reduced:
      reduceNumber(raw),

    pairs,

    positive,

    positiveBenefits,

    neutral,

    negative,
  };
}