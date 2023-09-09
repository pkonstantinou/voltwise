"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { ReadingsValidation } from "@/lib/validations";
import { ReadingInput } from "./ReadingInput";

export const InitialReadingsForm = () => {
  const form = useForm<z.infer<typeof ReadingsValidation>>({
    resolver: zodResolver(ReadingsValidation),
    defaultValues: {
      day_consumption: "",
      night_consumption: "",
      total_production: "",
      outflow_production: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof ReadingsValidation>) => {
    console.log({ values });
  };

  return (
    <Card className="w-[350px]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardHeader>
            <CardTitle className="text-xl font-normal">
              Αρχικές τιμές καταμετρητών
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ReadingInput
              form={form}
              name="day_consumption"
              label="Ημερήσιο"
              placeholder="Μονάδες σε kWh"
            />
            <ReadingInput
              form={form}
              name="night_consumption"
              label="Νυχτερινό"
              placeholder="Μονάδες σε kWh"
            />
            <ReadingInput
              form={form}
              name="total_production"
              label="Παραγωγή"
              placeholder="Μονάδες σε kWh"
            />
            <ReadingInput
              form={form}
              name="outflow_production"
              label="Εκροή"
              placeholder="Μονάδες σε kWh"
            />
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button variant="outline" type="submit">
              Αποθήκευση
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};
