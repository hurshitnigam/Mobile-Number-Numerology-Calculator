import {
  POSITIVE_PAIRS,
  NEGATIVE_PAIRS,
  NEUTRAL_PAIRS,
  PROBLEMS,
} from "../data/mobilePairs";

import { reduceNumber } from "./reduceNumber";

import { PositivePairEffects } from "../data/positivePairEffects";

import {
  NOT_RECOMMENDED_TRIPLETS,
  NOT_RECOMMENDED_DOUBLES,
} from "../data/notRecommendedNumbers";

export function calculateMobile(mobile = "") {
  const digits = mobile.replace(/[^0-9]/g, "");

  const notRecommended = [];

  const pairs = [];

  for (
    let i = 0;
    i < digits.length - 1;
    i++
  ) {
    const double =
      digits.substring(
        i,
        i + 2
      );

    if (
      NOT_RECOMMENDED_DOUBLES.includes(
        double
      )
    ) {
      notRecommended.push(
        double
      );
    }
  }

  for (
    let i = 0;
    i < digits.length - 2;
    i++
  ) {
    const triplet =
      digits.substring(
        i,
        i + 3
      );

    if (
      NOT_RECOMMENDED_TRIPLETS.includes(
        triplet
      )
    ) {
      notRecommended.push(
        triplet
      );
    }
  }

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

    notRecommended,
  };
}