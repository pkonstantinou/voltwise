import { Control } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { generateMonthYearEntries } from "./utils";

type MonthYearSelectProps = {
  control: Control<{ initial_month_year: string }>;
  locale: string;
};

export const MonthYearSelect: React.FC<MonthYearSelectProps> = ({
  control,
  locale,
}: MonthYearSelectProps) => {
  const monthYearEntries = generateMonthYearEntries(2023, locale);

  return (
    <FormField
      control={control}
      name="initial_month_year"
      render={({ field }) => (
        <FormItem className="mb-0.5 flex justify-between items-center mt-2">
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Διαλέξτε μήνα/έτος" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {monthYearEntries.map(({ value, label }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
};
