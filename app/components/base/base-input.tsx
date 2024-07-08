"use client";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import React, { FC, forwardRef, useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  search?: boolean;
}

const BaseInput = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, search = false, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleOnFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
    };
    return (
      <div className="relative">
        {search && (
          <Search
            className={cn(
              "w-4 absolute inset-3 left-2 text-[#475569] dark:text-[#CBD5E1] forced-colors:bg-red-400",
              isFocused ? "text-[#24B5FF] dark:text-[#49C2FF]" : ""
            )}
          />
        )}
        <input
          ref={ref}
          onFocus={handleOnFocus}
          onBlur={handleBlur}
          className={cn(
            "border  w-full rounded-md py-3 bg-[#FAFAFA] dark:bg-[#1E293B] text-sm text-[#0F172A] dark:text-[#F8FAFC] border-[#CBD5E1] dark:border-[#334155]",
            isFocused ? "border border-[#24B5FF] dark:border-[#49C2FF] focus:outline-none  " : "",
            search ? "px-8 border-none" : "px-2"
          )}
          {...props}
          placeholder={placeholder}
        ></input>
      </div>
    );
  }
);

export default BaseInput;
