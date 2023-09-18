"use client";

import { redirect } from "next/navigation";
import { CheckCircle, CircleDashed } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type MonthYearSelectorProps = {
  selectedMonthYear: string;
  selectOptions: {
    value: string;
    label: string;
    submitted: boolean;
  }[];
};

export const MonthYearSelector: React.FC<MonthYearSelectorProps> = ({
  selectedMonthYear,
  selectOptions,
}) => {
  return (
    <div className=" w-52">
      <Select
        onValueChange={(value) => redirect(`/readings/${value}`)}
        defaultValue={selectedMonthYear}
      >
        <SelectTrigger className="dark:focus:ring-transparent">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {selectOptions.map(({ value, label, submitted }) => (
            <SelectItem key={value} value={value}>
              <div className="flex gap-2 justify-center items-center">
                {submitted ? (
                  <CheckCircle size={18} color="green" />
                ) : (
                  <CircleDashed size={18} color="red" />
                )}
                <p>{label}</p>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
