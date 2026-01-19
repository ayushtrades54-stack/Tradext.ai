"use client";

export default function ReportBox({ report }) {
  if (!report) return null;

  return (
    <div className="mt-6 p-4 bg-white/10 rounded-lg text-white">
      <h2 className="text-lg font-semibold mb-2">AI Detailed Report</h2>
      <p className="text-sm leading-relaxed">{report}</p>
    </div>
  );
}
