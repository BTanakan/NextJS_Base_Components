"use client";
import { cn } from "@/lib/utils";
import React, { FC, useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

const BaseInput: FC<InputProps> = ({ placeholder, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleOnFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <input
      onFocus={handleOnFocus}
      onBlur={handleBlur}
      className={cn(
        "border  w-full rounded-md px-2 py-3 bg-[#FAFAFA] dark:bg-[#1E293B] text-sm text-[#0F172A] dark:text-[#F8FAFC] border-[#CBD5E1] dark:border-[#334155]",
        isFocused ? "border  border-[#24B5FF] dark:border-[#49C2FF] focus:outline-none  " : ""
      )}
      placeholder={placeholder}
    ></input>
  );
};

export default BaseInput;
