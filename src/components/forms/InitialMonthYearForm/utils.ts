import { DateTime } from "luxon";

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
  startYear: number,
  locale: string
): MonthYear[] => {
  const currentDate = DateTime.now();
  const endYear = currentDate.year;
  const monthsYears: MonthYear[] = [];

  for (let year = endYear; year >= startYear; year--) {
    const startMonth = year === endYear ? currentDate.month : 12;
    const endMonth = year === startYear ? 0 : 1;

    for (let month = startMonth; month > endMonth; month--) {
      const formattedMonth = String(month).padStart(
        2,
        "0"
      ) as unknown as MonthCode;
      const formattedYear = year.toString();

      const dateTime = DateTime.fromObject({ year, month, day: 1 }).setLocale(
        locale
      );
      const monthName =
        locale === "el"
          ? greekMonthMap[formattedMonth]
          : dateTime.toLocaleString({ month: "long" });

      const monthYear = {
        value: `${formattedMonth}.${formattedYear}`,
        label: `${monthName} ${formattedYear}`,
      };

      monthsYears.push(monthYear);
    }
  }

  return monthsYears;
};
