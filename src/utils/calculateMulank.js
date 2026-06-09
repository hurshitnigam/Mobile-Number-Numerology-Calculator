import { reduceNumber } from "./reduceNumber";

export function calculateMulank(dob) {
  if (!dob) return null;

  const [day] = dob.split("/");

  const raw = Number(day);

  return {
    raw,
    reduced: reduceNumber(raw),
  };
}
