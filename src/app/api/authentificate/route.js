import { autheticate } from "../../../database/database";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { password } = await request.json();

    // Rufe die Funktion auf, um den neuen Eintrag zu erstellen
    const result = await autheticate(password);

    return NextResponse.json(
      { message: "Signed in successfully!", result },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error authentificating:", error);
    return NextResponse.json(
      { message: "Error authentificating." },
      { status: 500 }
    );
  }
}
