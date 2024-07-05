import { Button } from "@/components/ui/button";
import Image from "next/image";
import BaseButton from "./components/base/base-button";
import { Search } from "lucide-react";

export default function Home() {
  return (
    <div className="">
      <BaseButton
        // variant="ghost"
        classNames="bg-[#1E293B] bg-[#1E293B] text-white text-sm hover:bg-[#F8FAFC]"
      >
        {/* <Search className="w-4" /> */}
        Continue
      </BaseButton>
    </div>
  );
}
