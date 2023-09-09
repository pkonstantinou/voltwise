import * as z from "zod";
import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ReadingsValidation } from "@/lib/validations";

type ReadingInputProps = {
  form: UseFormReturn<z.infer<typeof ReadingsValidation>>;
  name: keyof z.infer<typeof ReadingsValidation>;
  label: string;
  placeholder?: string;
};

export const ReadingInput: React.FC<ReadingInputProps> = ({
  form,
  name,
  label,
  placeholder,
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="mb-2">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type="number" placeholder={placeholder} {...field} />
          </FormControl>
        </FormItem>
      )}
    />
  );
};
