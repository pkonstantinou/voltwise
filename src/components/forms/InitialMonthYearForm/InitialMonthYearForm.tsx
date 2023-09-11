"use client";

import { useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as ShadCard from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/buttons";
import { updateUserSettings } from "@/lib/actions/user.actions";
import { MonthYearSelect } from "./MonthYearSelect";
import { toastDesc } from "./utils";

const FormSchema = z.object({
  initial_month_year: z.string().nonempty(),
});

type InitialReadingsFormProps = {
  savedInitialMonthYear: string;
  userId: string;
};

export const InitialMonthYearForm: React.FC<InitialReadingsFormProps> = ({
  savedInitialMonthYear,
  userId,
}) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      initial_month_year: !!savedInitialMonthYear
        ? savedInitialMonthYear
        : undefined,
    },
  });

  const watchedInitialMonthYear = form.watch("initial_month_year");
  console.log({ watchedInitialMonthYear });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
      setLoading(true);
      const settings = { initial_month_year: values.initial_month_year };
      await updateUserSettings({ userId, settings });
      setLoading(false);

      toast({ description: toastDesc.success });
    } catch {
      toast({ variant: "destructive", description: toastDesc.error });
    }
  };

  const isSaveBtnDisabled =
    savedInitialMonthYear === form.watch("initial_month_year");

  return (
    <ShadCard.Card className="w-[330px] self-start flex-shrink-0">
      <ShadCard.CardHeader>
        <ShadCard.CardTitle>Μήνας και έτος αρχικών τιμών</ShadCard.CardTitle>
      </ShadCard.CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <ShadCard.CardContent>
            <MonthYearSelect control={form.control} locale="el" />
          </ShadCard.CardContent>
          <ShadCard.CardFooter>
            <Button
              className="w-32"
              variant="outline"
              type="submit"
              loading={loading}
              disabled={isSaveBtnDisabled}
            >
              Αποθήκευση
            </Button>
          </ShadCard.CardFooter>
        </form>
      </Form>
    </ShadCard.Card>
  );
};
