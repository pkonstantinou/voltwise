import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

export const Sidebar = () => {
  return (
    <section className="text-white w-56 border-r border-[#ffffff22] overflow-y-scroll p-4 flex flex-col items-center justify-end">
      <Button variant="ghost">
        <Settings className="mr-2" size={20} /> Ρυθμίσεις
      </Button>
    </section>
  );
};
