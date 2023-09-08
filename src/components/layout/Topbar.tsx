import { SignOutButton } from "@clerk/nextjs";
import { LogOut, Zap } from "lucide-react";

export const Topbar = () => {
  return (
    <nav className="w-full h-16  px-14 bg-black border-b border-[#ffffff22] fixed top-0 z-30 flex items-center justify-between">
      <div className="flex justify-center items-center gap-2">
        <Zap size={36} color="white" strokeOpacity={0.6} />
        <p className="text-white text-xl font-semibold">Voltwise</p>
      </div>
      <SignOutButton>
        <div className="flex justify-center items-center gap-2 cursor-pointer">
          <p className="text-white text-sm">Έξοδος</p>
          <LogOut size={24} color="white" />
        </div>
      </SignOutButton>
    </nav>
  );
};
