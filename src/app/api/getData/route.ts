// pages/api/getData.js
import { getDataFromDatabase } from "@/database/database";
import { NextResponse } from "next/server";

export async function GET(req: any, res: any) {
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
