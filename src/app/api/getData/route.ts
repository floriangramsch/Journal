// pages/api/getData.js
import { getDataFromDatabase } from "@/database/database";
import { NextResponse } from "next/server";

export default async function handler(req: any, res: any) {
  if (req.method === "GET") {
    const data = await getDataFromDatabase();
    res.status(200).json(data);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
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
