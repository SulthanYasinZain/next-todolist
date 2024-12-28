import { Client } from "@vercel/postgres";

const client = new Client({
  connectionString: process.env.POSTGRES_URL,
});

export { client };
