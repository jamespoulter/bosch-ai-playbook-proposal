export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import { JabraProposalPDF } from "@/lib/JabraProposalPDF";
import React from "react";

export async function GET() {
  try {
    const buffer = await renderToBuffer(React.createElement(JabraProposalPDF));
    const pdfData = new Uint8Array(buffer);

    return new NextResponse(pdfData, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="Jabra-Voice-AI-Research-Programme-Proposal.pdf"',
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("PDF generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 }
    );
  }
}
