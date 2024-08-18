import { createEntry } from "../../../database/database";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { content, happiness } = await request.json();

    // Rufe die Funktion auf, um den neuen Eintrag zu erstellen
    const result = await createEntry(content, happiness);

    return NextResponse.json(
      { message: "Entry successfully created!", result },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating entry:", error);
    return NextResponse.json(
      { message: "Error creating entry." },
      { status: 500 }
    );
  }
}
