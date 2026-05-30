import jsPDF from "jspdf";

import { buildReportData } from "./reportTemplate";

export function generatePdf(result) {
  const pdf = new jsPDF();

  const report = buildReportData(result);

  pdf.setFontSize(20);

  pdf.text("Mobile Number Numerology Report", 20, 20);

  pdf.setFontSize(12);

  pdf.text(`Generated: ${report.generatedAt}`, 20, 35);

  pdf.text(report.summary, 20, 55);

  pdf.save("numerology-report.pdf");
}
