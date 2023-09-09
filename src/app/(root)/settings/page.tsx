import { Page } from "@/components/layout";
import { InitialReadingsForm } from "@/components/forms";

const SettingsPage = () => {
  const savedReadings = {
    day_consumption: "0",
    night_consumption: "0",
    total_production: "200",
    outflow_production: "0",
  };

  return (
    <Page header="Ρυθμίσεις">
      <InitialReadingsForm savedReadings={savedReadings} />
    </Page>
  );
};

export default SettingsPage;
