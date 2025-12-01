import { NextRequest, NextResponse } from "next/server";
import { generateRequestNumber } from "@/lib/utils";

// In-memory storage for demo (would use database in production)
const requests: Map<string, unknown> = new Map();

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    const requestNumber = generateRequestNumber();
    const requestData = {
      ...data,
      requestNumber,
      status: "pending",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    // Store request
    requests.set(requestNumber, requestData);

    // In production, you would:
    // 1. Save to database
    // 2. Send confirmation email
    // 3. Notify admin

    return NextResponse.json({
      success: true,
      requestNumber,
      message: "Demande créée avec succès",
    });
  } catch (error) {
    console.error("Error creating request:", error);
    return NextResponse.json(
      { error: "Failed to create request" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const requestNumber = searchParams.get("id");

  if (requestNumber) {
    const requestData = requests.get(requestNumber);
    if (!requestData) {
      return NextResponse.json(
        { error: "Request not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(requestData);
  }

  // Return all requests (for admin/demo purposes)
  return NextResponse.json(Array.from(requests.values()));
}
