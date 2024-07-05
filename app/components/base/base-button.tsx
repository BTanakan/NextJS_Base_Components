import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline";
  classNames?: string;
}

const getVariantClasses = (variant: string) => {
  switch (variant) {
    case "ghost":
      return "bg-transparent text-[#0F172A] hover:bg-[#EFF0F6]";
    case "outline":
      return "bg-transparent border border-[#334155] text-[#0F172A] hover:bg-[#EFF0F6]";
    case "default":
    default:
      return "bg-[#1E293B] text-white hover:bg-[#334155]";
  }
};
const BaseButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, type = "button", variant = "default", ...props }, ref) => {
    const baseClasses = "h-10 w-auto px-4 py-2 rounded-md flex gap-x-2 justify-center items-center";
    const classes = `${baseClasses} ${props.classNames} ${getVariantClasses(variant)}`;

    return (
      <button ref={ref} type={type} className={cn(classes)} {...props}>
        {children}
      </button>
    );
  }
);

export default BaseButton;
