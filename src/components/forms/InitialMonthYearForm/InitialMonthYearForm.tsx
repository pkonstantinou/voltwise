"use client";

import { useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/buttons";
import { updateUserSettings } from "@/lib/actions/user.actions";
import { MonthYearSelect } from "./MonthYearSelect";

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

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
      setLoading(true);
      const settings = { initial_month_year: values.initial_month_year };
      await updateUserSettings({ userId, settings });
      setLoading(false);

      toast({
        description:
          "Ο μήνας και το έτος των αρχικών σας τιμών αποθηκεύτηκαν με επιτυχία.",
      });
    } catch {
      toast({
        variant: "destructive",
        description:
          "Παρουσιάστηκε πρόβλημα κατα την αποθήκευση του μήνα και έτους των αρχικών σας τιμών.",
      });
    }
  };

  return (
    <Card className="w-[300px] self-start flex-shrink-0">
      <CardHeader>
        <CardTitle>Μήνας και έτος αρχικών τιμών</CardTitle>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent>
            <MonthYearSelect control={form.control} locale="el" />
          </CardContent>
          <CardFooter>
            <Button
              className="w-32"
              variant="outline"
              type="submit"
              loading={loading}
            >
              Αποθήκευση
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};
