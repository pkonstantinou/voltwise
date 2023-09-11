import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";
import { LogOut, Zap } from "lucide-react";
import { Button } from "@/components/buttons";

export const Topbar = () => {
  return (
    <nav className="w-full h-16  px-14 bg-black border-b border-neutral-800 fixed top-0 z-30 flex items-center justify-between">
      <Link href="/">
        <div className="flex justify-center items-center gap-2">
          <Zap size={36} color="white" strokeOpacity={0.6} />
          <p className="text-xl font-semibold">Voltwise</p>
        </div>
      </Link>
      <SignOutButton>
        <Button variant="ghost">
          Έξοδος <LogOut className="ml-2" size={20} />
        </Button>
      </SignOutButton>
    </nav>
  );
};
