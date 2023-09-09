import * as z from "zod";

export const ReadingsValidation = z.object({
  day_consumption: z.string().nonempty(),
  night_consumption: z.string().nonempty(),
  total_production: z.string().nonempty(),
  outflow_production: z.string().nonempty(),
});
