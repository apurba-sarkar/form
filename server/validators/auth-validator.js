const { z } = require("zod");
const authSchema = z.object({
  fullname: z.string({ required_error: "name" }).min(2).max(10),
  age: z.number({ required_error: "number" }),
  pcds: z.string({ required_error: "name" }),
});

module.exports = authSchema