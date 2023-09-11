"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as ShadCard from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/buttons";
import { ReadingsValidation } from "@/lib/validations";
import { ReadingsType } from "@/types";
import { ReadingInput } from "./ReadingInput";
import { updateUserSettings } from "@/lib/actions/user.actions";
import { isSaveBtnDisabled, toastDesc, inputs } from "./utils";

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
      const settings = { initial_readings: values };
      await updateUserSettings({ userId, settings });
      setLoading(false);

      toast({ description: toastDesc.success });
    } catch {
      toast({ variant: "destructive", description: toastDesc.error });
    }
  };

  return (
    <ShadCard.Card className="w-[330px] self-start flex-shrink-0">
      <ShadCard.CardHeader>
        <ShadCard.CardTitle>Αρχικές τιμές μετρητών</ShadCard.CardTitle>
      </ShadCard.CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <ShadCard.CardContent>
            {inputs.map((input) => (
              <ReadingInput
                key={input.name}
                control={form.control}
                name={input.name}
                label={input.label}
                placeholder="Μονάδες σε kWh"
              />
            ))}
          </ShadCard.CardContent>
          <ShadCard.CardFooter>
            <Button
              className="w-32"
              variant="outline"
              type="submit"
              loading={loading}
              disabled={isSaveBtnDisabled(savedInitialReadings, form.watch())}
            >
              Αποθήκευση
            </Button>
          </ShadCard.CardFooter>
        </form>
      </Form>
    </ShadCard.Card>
  );
};
