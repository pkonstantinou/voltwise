import { currentUser } from "@clerk/nextjs";
import { Page } from "@/components/layout";
import { InitialReadingsForm } from "@/components/forms";
import { getUserSettings } from "@/lib/actions/user.actions";

const SettingsPage = async () => {
  const user = await currentUser();
  if (!user) return null;

  const settings = await getUserSettings(user.id);

  return (
    <Page header="Ρυθμίσεις">
      <InitialReadingsForm
        savedInitialReadings={settings.initialReadings}
        userId={user.id}
      />
    </Page>
  );
};

export default SettingsPage;
