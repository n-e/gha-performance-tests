import { Client } from "pg";

const client = new Client();

await client.connect();

const res = await client.query("select 'hello world'");
console.log(res.rows.at(0));

await client.end();
