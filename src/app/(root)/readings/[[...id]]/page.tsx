import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";
import { Page } from "@/components/layout";
import { MonthYearSelector } from "./MonthYearSelector";
import { getUserSettings } from "@/lib/actions/user.actions";
import { generateMonthYearEntries } from "@/lib/utils";

type ReadingsPageProps = { params: { id?: string[] } };

const ReadingsPage = async ({ params }: ReadingsPageProps) => {
  const user = await currentUser();
  if (!user) return null;

  const settings = await getUserSettings(user.id);

  const availableDates = generateMonthYearEntries(
    settings.initial_month_year || "202301",
    "el"
  )
    .map((date) => ({ ...date, submitted: false }))
    .slice(0, -1);

  const availableDateValues = availableDates.map((date) => date.value);

  if (params?.id?.length !== 1 || !availableDateValues.includes(params.id[0])) {
    redirect(`/readings/${availableDateValues[0]}`);
  }

  return (
    <Page
      header="Μετρήσεις"
      widget={
        <MonthYearSelector
          selectedMonthYear={params.id[0]}
          selectOptions={availableDates}
        />
      }
    >
      <p>Selecter month-year: {params?.id}</p>
    </Page>
  );
};

export default ReadingsPage;
