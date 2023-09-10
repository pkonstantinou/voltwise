import * as z from "zod";
import { ReadingsValidation } from "@/lib/validations";

export type ReadingsType = z.infer<typeof ReadingsValidation>;

export type UserSettingsType = {
  initialReadings: ReadingsType;
};
