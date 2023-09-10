"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { ReadingsValidation } from "@/lib/validations";
import { ReadingsType } from "@/types";
import { ReadingInput } from "./ReadingInput";
import { updateInitialReadings } from "@/lib/actions/user.actions";

type InitialReadingsFormProps = {
  savedInitialReadings: ReadingsType;
  userId: string;
};

export const InitialReadingsForm: React.FC<InitialReadingsFormProps> = ({
  savedInitialReadings,
  userId,
}) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<ReadingsType>({
    resolver: zodResolver(ReadingsValidation),
    defaultValues: {
      day_consumption: savedInitialReadings.day_consumption,
      night_consumption: savedInitialReadings.night_consumption,
      total_production: savedInitialReadings.total_production,
      outflow_production: savedInitialReadings.outflow_production,
    },
  });

  const onSubmit = async (values: ReadingsType) => {
    try {
      setLoading(true);
      await updateInitialReadings({ userId, initialReadings: values });
      setLoading(false);

      toast({
        description:
          "Οι αρχικές τιμές των μετρητών σας αποθηκεύτηκαν με επιτυχία.",
      });
    } catch {
      toast({
        variant: "destructive",
        description:
          "Παρουσιάστηκε πρόβλημα κατα την αποθήκευση των αρχικών σας τιμών.",
      });
    }
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Αρχικές τιμές μετρητών</CardTitle>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
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
          <CardFooter>
            <Button
              className="w-32"
              variant="outline"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <Loader2 size={20} className="animate-spin" />
              ) : (
                "Αποθήκευση"
              )}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};
