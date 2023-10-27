import express from "npm:express@4.18.2";
import mongoose from "npm:mongoose@7.6.3";

import addMascota from "./resolvers/newmascota.ts";
import obtain from "./resolvers/getmascotas.ts";
import obtainid from "./resolvers/getmascotaid.ts";
import updatemas from "./resolvers/updtmascota.ts";
import deletemas from "./resolvers/deletemas.ts";


import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
const env = await load();
const MONGO_URL = env.MONGO_URL || Deno.env.get("MONGO_URL");

if (!MONGO_URL) {
  console.log("No mongo URL found");
  Deno.exit(1);
}

await mongoose.connect(MONGO_URL);

const app = express();
app.use(express.json())
app
.get("/api/mascotas",obtain)
.get("/api/mascotas/:id",obtainid)
.post("/api/mascotas",addMascota)
.put("/api/mascotas/:id",updatemas)
.delete("/api/mascotas/:id",deletemas);


app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
