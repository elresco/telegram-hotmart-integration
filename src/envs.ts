import z from "zod";
import dotenv from "dotenv";

dotenv.config({
  path: "../.env",
});

const envsSchema = z.object({});
const envs = envsSchema.parse(envsSchema);

export default envs;
