import { generateSummary } from "./summaryGenerator";

export function buildReportData(result) {
  return {
    generatedAt: new Date().toLocaleDateString(),

    summary: generateSummary(result),
  };
}
