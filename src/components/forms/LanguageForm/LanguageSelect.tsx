import { Control } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormControl, FormField, FormItem } from "@/components/ui/form";

type LanguageSelectProps = {
  control: Control<{ language: string }>;
};

export const LanguageSelect: React.FC<LanguageSelectProps> = ({ control }) => {
  const languageNames = new Intl.DisplayNames(["el"], { type: "language" });

  return (
    <FormField
      control={control}
      name="language"
      render={({ field }) => (
        <FormItem className="mb-0.5 flex justify-between items-center mt-2">
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Διαλέξτε γλώσσα" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="el">{languageNames.of("el")}</SelectItem>
              {/* <SelectItem value="en">{languageNames.of("en")}</SelectItem> */}
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
};
