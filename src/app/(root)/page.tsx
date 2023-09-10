import { Sun, Moon, TowerControl, Waves } from "lucide-react";
import { ValueCard } from "@/components/cards";
import { Page } from "@/components/layout";

const HomePage = () => {
  return (
    <Page header="Μετρήσεις" headerNote="Σεπτέμβριος 2023">
      <div className="flex flex-wrap gap-5">
        <ValueCard
          label="Ημερήσιο"
          value="500"
          color="yellow"
          icon={<Sun color="gray" />}
        />
        <ValueCard
          label="Νυχτερινό"
          value="120"
          color="purple"
          icon={<Moon color="gray" />}
        />
        <ValueCard
          label="Παραγωγή"
          value="650"
          color="green"
          icon={<TowerControl color="gray" />}
        />
        <ValueCard
          label="Εκροή"
          value="410"
          color="blue"
          icon={<Waves color="gray" />}
        />
      </div>
    </Page>
  );
};

export default HomePage;
