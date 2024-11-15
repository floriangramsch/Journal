// pages/api/getData.js
import { getDataFromDatabase } from "@/database/database";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const authHeader = req.headers.get("Authorization");
    const token = authHeader?.split(" ")[1]; // "Bearer <token>"

    if (!token) {
      return NextResponse.json(
        { message: "Nicht authentifiziert." },
        { status: 401 }
      );
    }

    // Token verifizieren
    try {
      const secret = process.env.JWT_SECRET;
      if (!secret) {
        throw new Error("JWT_SECRET is not defined");
      }
      const decoded = jwt.verify(token, secret);
      console.log("User Info:", decoded);

      // Daten abrufen, nachdem das Token validiert wurde
      const data = await getDataFromDatabase();
      return NextResponse.json({ data });
    } catch (err) {
      console.error("Token ungültig:", err);
      return NextResponse.json(
        { message: "Ungültiges Token." },
        { status: 403 }
      );
    }
  } catch (error) {
    console.error("Fehler beim Abrufen der Daten:", error);
    return NextResponse.json(
      { message: "Fehler beim Abrufen der Daten." },
      { status: 500 }
    );
  }
}
