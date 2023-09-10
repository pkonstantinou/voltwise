import * as z from "zod";

const regexExp = /^(0|[1-9]\d*)$/;

export const ReadingsValidation = z.object({
  day_consumption: z.string().regex(regexExp),
  night_consumption: z.string().regex(regexExp),
  total_production: z.string().regex(regexExp),
  outflow_production: z.string().regex(regexExp),
});
