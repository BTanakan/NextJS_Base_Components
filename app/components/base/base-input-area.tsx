import { cn } from "@/lib/utils";
import React, { FC, forwardRef, useState } from "react";

interface BaseInputAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
}

const BaseInputArea = forwardRef<HTMLTextAreaElement, BaseInputAreaProps>(
  ({ placeholder, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleOnFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
    };

    return (
      <textarea
        ref={ref}
        id="message"
        onFocus={handleOnFocus}
        onBlur={handleBlur}
        rows={4}
        className={cn(
          "w-full rounded-md text-sm py-2.5 px-3 bg-[#FAFAFA] dark:bg-[#1E293B] text-[#0F172A] dark:text-[#F8FAFC] border border-[#CBD5E1] dark:border-[#334155]",
          isFocused ? "border border-[#24B5FF] dark:border-[#49C2FF] focus:outline-none  " : ""
        )}
        {...props}
        placeholder={placeholder}
      ></textarea>
    );
  }
);

export default BaseInputArea;
