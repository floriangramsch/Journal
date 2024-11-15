// src/app/api/authentificate/page.js
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  const { password } = await req.json();

  console.log("password", password);
  console.log("SECRET_PASSWORD", process.env.SECRET_PASSWORD);
  console.log("JWT_SECRET", process.env.JWT_SECRET);
  // Beispiel: Verifizierung des Passworts
  if (password === process.env.SECRET_PASSWORD) {
    // JWT generieren
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error("JWT_SECRET is not defined");
    }
    const token = jwt.sign({ username: "flo" }, secret, {
      expiresIn: "1h", // Token läuft nach einer Stunde ab
    });

    return NextResponse.json({ result: true, token }, { status: 201 });
  } else {
    return NextResponse.json(
      { result: false, message: "Falsches Passwort" },
      { status: 401 }
    );
  }
}
