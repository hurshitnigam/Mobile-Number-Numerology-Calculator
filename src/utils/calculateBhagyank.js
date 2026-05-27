import { reduceNumber } from "./reduceNumber";

export function calculateBhagyank(dob) {
  if (!dob) return null;

  const digits = dob.replace(/[^0-9]/g, "");

  const raw = digits.split("").reduce((sum, d) => sum + Number(d), 0);

  return {
    raw,
    reduced: reduceNumber(raw),
  };
}
