"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Home, Gauge, Settings } from "lucide-react";
import { Button } from "@/components/buttons";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="w-56 border-r border-neutral-800 overflow-y-auto p-4 flex flex-col items-center justify-between">
      <div className="flex flex-col gap-1.5">
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
        <Link href="/readings">
          <Button
            variant="ghost"
            className={`w-40 flex justify-start ${
              pathname.includes("/readings") ? "bg-neutral-800" : ""
            }`}
          >
            <Gauge className="mr-4" size={20} /> Μετρήσεις
          </Button>
        </Link>
      </div>
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
