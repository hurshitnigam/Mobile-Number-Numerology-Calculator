import {
  POSITIVE_PAIRS,
  NEGATIVE_PAIRS,
  NEUTRAL_PAIRS,
} from "../data/mobilePairs";

import { reduceNumber } from "./reduceNumber";

import { PositivePairEffects } from "../data/positivePairEffects";
import { NeutralPairEffects } from "../data/neutralPairEffects";
import { NegativePairEffects } from "../data/negativePairEffects";

import {
  NOT_RECOMMENDED_TRIPLETS,
  NOT_RECOMMENDED_DOUBLES,
} from "../data/notRecommendedNumbers";

export function calculateMobile(mobile = "") {
  const digits = mobile.replace(/[^0-9]/g, "");

  const notRecommended = [];

  const pairs = [];

  // Detect 00

  for (let i = 0; i < digits.length - 1; i++) {
    const double = digits.substring(i, i + 2);

    if (NOT_RECOMMENDED_DOUBLES.includes(double)) {
      notRecommended.push(double);
    }
  }

  // Detect Triplets

  for (let i = 0; i < digits.length - 2; i++) {
    const triplet = digits.substring(i, i + 3);

    if (NOT_RECOMMENDED_TRIPLETS.includes(triplet)) {
      notRecommended.push(triplet);
    }
  }

  // Create Pairs

  for (let i = 0; i < digits.length - 1; i++) {
    pairs.push(digits[i] + digits[i + 1]);
  }

  const positiveBenefits = [];

  const neutralEffects = [];

  const negativeProblems = [];

  pairs.forEach((pair) => {
    if (POSITIVE_PAIRS.includes(pair)) {
      positiveBenefits.push({
        pair,

        english: PositivePairEffects[pair]?.english || "",

        hindi: PositivePairEffects[pair]?.hindi || "",
      });
    } else if (NEGATIVE_PAIRS.includes(pair)) {
      negativeProblems.push({
        pair,

        english: NegativePairEffects[pair]?.english || "",

        hindi: NegativePairEffects[pair]?.hindi || "",
      });
    } else if (NEUTRAL_PAIRS.includes(pair)) {
      neutralEffects.push({
        pair,

        english: NeutralPairEffects[pair]?.english || "",

        hindi: NeutralPairEffects[pair]?.hindi || "",
      });
    }
  });

  const raw = digits.split("").reduce((sum, digit) => sum + Number(digit), 0);

  return {
    digits,

    raw,

    reduced: reduceNumber(raw),

    pairs,

    positiveBenefits,

    neutralEffects,

    negativeProblems,

    notRecommended,
  };
}
