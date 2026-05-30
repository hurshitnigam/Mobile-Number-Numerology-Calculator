export function generateSummary(result) {
  const positiveCount = result.mobile.positive.length;

  const neutralCount = result.mobile.neutral.length;

  const negativeCount = result.mobile.negative.length;

  let overall = "Moderately Favorable";

  if (positiveCount > negativeCount) {
    overall = "Favorable";
  }

  if (negativeCount > positiveCount) {
    overall = "Needs Attention";
  }

  return `
  This mobile number contains
  ${positiveCount} positive pair(s),
  ${neutralCount} neutral pair(s)
  and ${negativeCount} negative pair(s).
  
  Mulank and Namank compatibility:
  ${result.compatibility.mulankNamank.status}
  
  Bhagyank and Namank compatibility:
  ${result.compatibility.bhagyankNamank.status}
  
  Mulank and Mobile compatibility:
  ${result.compatibility.mulankMobile.status}
  
  Bhagyank and Mobile compatibility:
  ${result.compatibility.bhagyankMobile.status}
  
  Overall Observation:
  ${overall}
  `;
}
