import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { DateTime } from "luxon";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const greekMonthMap = {
  "01": "Ιανουάριος",
  "02": "Φεβρουάριος",
  "03": "Μάρτιος",
  "04": "Απρίλιος",
  "05": "Μάιος",
  "06": "Ιούνιος",
  "07": "Ιούλιος",
  "08": "Αύγουστος",
  "09": "Σεπτέμβριος",
  "10": "Οκτώβριος",
  "11": "Νοέμβριος",
  "12": "Δεκέμβριος",
};

type MonthCode = keyof typeof greekMonthMap;
type MonthYear = { value: string; label: string };

export const generateMonthYearEntries = (
  startMonthYear: string,
  locale: string
): MonthYear[] => {
  const currentDate = DateTime.now();
  const year = startMonthYear.substring(0, 4);
  const month = startMonthYear.substring(4);

  if (month && year) {
    let startDate = DateTime.fromObject({
      year: +year,
      month: +month,
      day: 1,
    });

    const monthsYears: MonthYear[] = [];

    while (startDate <= currentDate) {
      const formattedMonth = startDate.toFormat("MM") as unknown as MonthCode;
      const formattedYear = startDate.toFormat("yyyy");

      const dateTime = DateTime.fromObject({
        year: +formattedYear,
        month: +formattedMonth,
        day: 1,
      }).setLocale(locale);

      const monthName =
        locale === "el"
          ? greekMonthMap[formattedMonth]
          : dateTime.toLocaleString({ month: "long" });

      const monthYear = {
        value: `${formattedYear}${formattedMonth}`,
        label: `${monthName} ${formattedYear}`,
      };

      monthsYears.push(monthYear);

      startDate = startDate.plus({ months: 1 });
    }

    return monthsYears.reverse();
  }

  return [];
};
