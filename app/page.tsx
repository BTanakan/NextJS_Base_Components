"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import BaseButton, { BtnColor } from "./components/base/base-button";
import { Check, Mail, Plus, Search } from "lucide-react";
import { useTheme } from "next-themes";
import BaseInput from "./components/base/base-input";
import SearchComponent from "./components/search";
import { ChangeEvent, useEffect, useState } from "react";
import BaseInputArea from "./components/base/base-input-area";

export default function Home() {
  const { setTheme } = useTheme();

  const [searchValue, setSearchValue] = useState("");
  const [filteredCustomers, setFilteredCustomers] = useState<string[]>([]);
  const customers = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown", "Charlie Davis"];

  useEffect(() => {
    filterCustomer();
  }, [searchValue]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const filterCustomer = () => {
    if (searchValue.length === 0) {
      setFilteredCustomers([]);
      return;
    }
    const data = customers.filter((customer) =>
      customer.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredCustomers(data);
  };

  return (
    <div className="p-4">
      <div className="p-4 grid grid-cols-4 gap-2 border border-dashed border-black">
        <div className="w-fit">
          <BaseButton color={BtnColor.PrimaryBlue}>Continue</BaseButton>
        </div>
        <BaseButton classNames="bg-[#24B5FF] text-white hover:bg-[#49C2FF]">
          <Plus className="w-4 " />
          Continue
        </BaseButton>
        <BaseButton color={BtnColor.Destructive}>Destructive</BaseButton>
        <BaseButton disabled={true}>Inactive</BaseButton>
        <BaseButton variant="outline">Cancel</BaseButton>
        <BaseButton variant="outline">
          <Check className="w-4" />
          Cancel
        </BaseButton>
        <BaseButton variant="outline">
          Cancel
          <Check className="w-4" />
        </BaseButton>
        <BaseButton variant="ghost">Subtle</BaseButton>
        <BaseButton variant="ghost">Ghost</BaseButton>
        <BaseButton variant="ghost">
          <Plus className="w-4" /> Ghost
        </BaseButton>
        <BaseButton className=" rounded-full w-fit p-2 bg-transparent text-[#0F172A] hover:bg-[#EFF0F6]">
          <Plus className="w-4 h-4" />
        </BaseButton>
        <BaseButton classNames="bg-[#1E293B] text-white hover:bg-[#334155]">
          <Mail className="w-4" />
          Login with Email
        </BaseButton>
        <BaseButton loading={true} classNames="bg-[#1E293B] text-white hover:bg-[#334155]">
          Loading
        </BaseButton>
        <BaseButton
          onClick={() => setTheme("light")}
          classNames="bg-[#1E293B] text-white hover:bg-[#334155]"
        >
          Light
        </BaseButton>
        <BaseButton
          onClick={() => setTheme("dark")}
          classNames="bg-[#1E293B] text-white hover:bg-[#334155]"
        >
          Dark
        </BaseButton>
      </div>
      <div className="mt-4 flex-col space-y-4 ">
        <div className="w-full">
          <BaseInput placeholder="กำหนดชื่อโปรเจกต์ของคุณ"></BaseInput>
        </div>
        <div>
          <SearchComponent
            value={searchValue}
            onChange={handleInputChange}
            onclick={(e) => console.log(e)}
            options={filteredCustomers}
          />
        </div>
        <BaseInputArea placeholder="เขียนคำอธิบายโปรเจกต์ของคุณ"></BaseInputArea>
      </div>
    </div>
  );
}
