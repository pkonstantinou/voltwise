import { currentUser } from "@clerk/nextjs";
import { Sun, Moon, TowerControl, Waves } from "lucide-react";
import { ValueCard } from "@/components/cards";

const HomePage = async () => {
  const user = await currentUser();
  console.log({ user });

  return (
    <div className="w-full flex flex-col overflow-y-scroll m-10 flex-1">
      <div className="flex items-center gap-3 mb-20">
        <h1 className="text-2xl text-white">Μετρήσεις</h1>
        <div className="w-0.5 bg-orange-500 h-6" />
        <p className="text-neutral-400">Σεπτέμβριος 2023</p>
      </div>

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
    </div>
  );
};

export default HomePage;
