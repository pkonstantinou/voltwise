import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ReadingsType } from "@/types";

type ReadingInputProps = {
  form: UseFormReturn<ReadingsType>;
  name: keyof ReadingsType;
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
