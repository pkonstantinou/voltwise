"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Home, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="w-56 border-r border-[#ffffff22] overflow-y-scroll p-4 flex flex-col items-center justify-between">
      <Link href="/">
        <Button
          variant="ghost"
          className={`w-40 flex justify-start ${
            pathname === "/" ? "bg-neutral-800" : ""
          }`}
        >
          <Home className="mr-4" size={20} /> Αρχική
        </Button>
      </Link>
      <Link href="/settings">
        <Button
          variant="ghost"
          className={`w-40 flex justify-start ${
            pathname === "/settings" ? "bg-neutral-800" : ""
          }`}
        >
          <Settings className="mr-4" size={20} /> Ρυθμίσεις
        </Button>
      </Link>
    </section>
  );
};
