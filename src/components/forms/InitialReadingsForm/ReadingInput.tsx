import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ReadingsType } from "@/types";

type ReadingInputProps = {
  control: Control<ReadingsType>;
  name: keyof ReadingsType;
  label: string;
  placeholder?: string;
};

export const ReadingInput: React.FC<ReadingInputProps> = ({
  control,
  name,
  label,
  placeholder,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="mb-0.5 flex justify-between items-center">
          <FormLabel className="font-light">{label}</FormLabel>
          <FormControl>
            <Input
              className="w-48"
              type="number"
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};
