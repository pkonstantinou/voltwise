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
import { LanguageSelect } from "./LanguageSelect";
import { toastDesc } from "./utils";

const FormSchema = z.object({
  language: z.string().nonempty(),
});

type LanguageFormProps = {
  savedLanguage: string;
  userId: string;
};

export const LanguageForm: React.FC<LanguageFormProps> = ({
  savedLanguage,
  userId,
}) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      language: !!savedLanguage ? savedLanguage : undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
      setLoading(true);
      const settings = { language: values.language };
      await updateUserSettings({ userId, settings });
      setLoading(false);

      toast({ description: toastDesc.success });
    } catch {
      toast({ variant: "destructive", description: toastDesc.error });
    }
  };

  const isSaveBtnDisabled = savedLanguage === form.watch("language");

  return (
    <ShadCard.Card className="w-[330px] self-start flex-shrink-0">
      <ShadCard.CardHeader>
        <ShadCard.CardTitle>Γλώσσα συστήματος</ShadCard.CardTitle>
      </ShadCard.CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <ShadCard.CardContent>
            <LanguageSelect control={form.control} />
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
