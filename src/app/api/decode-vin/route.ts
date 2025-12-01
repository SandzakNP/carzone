import { NextRequest, NextResponse } from "next/server";

interface NHTSAResult {
  Variable: string;
  Value: string | null;
  ValueId: string | null;
}

interface NHTSAResponse {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: NHTSAResult[];
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const vin = searchParams.get("vin");

  if (!vin) {
    return NextResponse.json(
      { error: "VIN parameter is required" },
      { status: 400 }
    );
  }

  if (vin.length !== 17) {
    return NextResponse.json(
      { error: "VIN must be exactly 17 characters" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!response.ok) {
      throw new Error("Failed to fetch from NHTSA API");
    }

    const data: NHTSAResponse = await response.json();
    const results = data.Results;

    const getValue = (variableName: string): string => {
      const result = results.find((r) => r.Variable === variableName);
      return result?.Value || "";
    };

    const decodedVIN = {
      make: getValue("Make"),
      model: getValue("Model"),
      modelYear: getValue("Model Year"),
      vehicleType: getValue("Vehicle Type"),
      plantCountry: getValue("Plant Country"),
      fuelType: getValue("Fuel Type - Primary"),
      engineModel: getValue("Engine Model"),
      displacement: getValue("Displacement (L)"),
      transmissionStyle: getValue("Transmission Style"),
      driveType: getValue("Drive Type"),
      bodyClass: getValue("Body Class"),
      doors: getValue("Doors"),
      errorCode: getValue("Error Code"),
      errorText: getValue("Error Text"),
    };

    return NextResponse.json(decodedVIN);
  } catch (error) {
    console.error("VIN decode error:", error);
    return NextResponse.json(
      { error: "Failed to decode VIN" },
      { status: 500 }
    );
  }
}
