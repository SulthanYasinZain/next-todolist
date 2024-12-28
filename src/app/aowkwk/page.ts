import { db } from "@vercel/postgres";
import { NextRequest } from "next/server";

export async function addTask(req: NextRequest) {
  const client = await db.connect();
  try {
    const { text } = await req.json();

    await client.sql`INSERT INTO tasks (name) VALUES (${text})`;

    client.release();
  } catch (error) {
    console.error("Error inserting task:", error);
  }
}
