// app/api/reminder/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  console.log("📬 Weekly reminder triggered");
  return NextResponse.json({ message: "Reminder sent!" });
}
