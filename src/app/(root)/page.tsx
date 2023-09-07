"use client";

import { useRouter } from "next/navigation";
import { SignOutButton } from "@clerk/nextjs";

const HomePage = () => {
  const router = useRouter();

  return (
    <>
      <h1 className="font-semibold text-3xl text-white">Home</h1>
      <SignOutButton signOutCallback={() => router.push("/sign-in")}>
        <div className="flex cursor-pointer gap-4 p-4">
          <p className="text-white">Logout</p>
        </div>
      </SignOutButton>
    </>
  );
};

export default HomePage;
