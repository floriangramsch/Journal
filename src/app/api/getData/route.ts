// pages/api/getData.js
import { getDataFromDatabase } from "@/database/database";
import { NextResponse } from "next/server";

export async function GET(res: any) {
  res.setHeader(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, proxy-revalidate"
  );
  res.setHeader("Expires", "0");
  res.setHeader("Pragma", "no-cache");

  try {
    const data = await getDataFromDatabase();

    return NextResponse.json({ data: data });
  } catch (error) {
    console.error("Error getting data:", error);
    return NextResponse.json(
      { message: "Error getting data." },
      { status: 500 }
    );
  }
}
