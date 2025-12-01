export interface VINDecodeResult {
  make: string;
  model: string;
  modelYear: string;
  vehicleType: string;
  plantCountry: string;
  fuelType: string;
  engineModel: string;
  displacement: string;
  transmissionStyle: string;
  driveType: string;
  bodyClass: string;
  doors: string;
  errorCode: string;
  errorText: string;
}

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

export async function decodeVIN(vin: string): Promise<VINDecodeResult> {
  const response = await fetch(
    `https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`
  );

  if (!response.ok) {
    throw new Error("Failed to decode VIN");
  }

  const data: NHTSAResponse = await response.json();
  const results = data.Results;

  const getValue = (variableName: string): string => {
    const result = results.find((r) => r.Variable === variableName);
    return result?.Value || "";
  };

  return {
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
}

// Re-export the validation function for backward compatibility
export { isValidVIN as validateVIN } from "./validations";
