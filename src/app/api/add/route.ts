import { db } from "@vercel/postgres";
import { NextRequest } from "next/server";
import { createClient } from "@vercel/postgres";

const client = createClient();

export async function addTask(req: NextRequest) {
  await client.connect();
  try {
    const { text } = await req.json();

    await client.sql`INSERT INTO tasks (name) VALUES (${text})`;
  } catch (error) {
    console.error("Error inserting task:", error);
  }
}
