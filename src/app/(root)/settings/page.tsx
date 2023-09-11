import { currentUser } from "@clerk/nextjs";
import { Page } from "@/components/layout";
import {
  InitialReadingsForm,
  InitialMonthYearForm,
  LanguageForm,
} from "@/components/forms";
import { getUserSettings } from "@/lib/actions/user.actions";

const SettingsPage = async () => {
  const user = await currentUser();
  if (!user) return null;

  const settings = await getUserSettings(user.id);

  return (
    <Page header="Ρυθμίσεις">
      <div className="flex gap-6 flex-wrap">
        <InitialReadingsForm
          savedInitialReadings={settings.initial_readings}
          userId={user.id}
        />
        <InitialMonthYearForm
          savedInitialMonthYear={settings.initial_month_year}
          userId={user.id}
        />
        <LanguageForm savedLanguage={settings.language} userId={user.id} />
      </div>
    </Page>
  );
};

export default SettingsPage;
