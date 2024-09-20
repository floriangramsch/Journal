// pages/api/getData.js
import { getDataFromDatabase } from "@/database/database";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const data = await getDataFromDatabase();
    const response = NextResponse.json({ data });
    // response.headers.set(
    //   "Cache-Control",
    //   "no-store, no-cache, must-revalidate, proxy-revalidate"
    // );
    // response.headers.set("Pragma", "no-cache");
    // response.headers.set("Expires", "0");
    return response;
  } catch (error) {
    console.error("Fehler beim Abrufen der Daten:", error);
    return NextResponse.json(
      { message: "Fehler beim Abrufen der Daten." },
      { status: 500 }
    );
  }
}
