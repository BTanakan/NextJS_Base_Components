import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline";
  color?: BtnColor;
  classNames?: string;
  loading?: boolean;
}

const getVariantClasses = (variant: string) => {
  switch (variant) {
    case "ghost":
      return "bg-transparent dark:bg-transparent text-[#0F172A] dark:text-[#F8FAFC]  hover:bg-[#EFF0F6] dark:hover:bg-[#334155]";
    case "outline":
      return "bg-transparent dark:bg-transparent text-[#0F172A] dark:text-[#F8FAFC] border border-[#334155] hover:bg-[#EFF0F6] dark:hover:bg-[#334155]";
    default:
      return "";
  }
};

export enum BtnColor {
  Primary = "primary",
  PrimaryBlue = "primary-blue",
  AllWhite = "all-white",
  Destructive = "destructive",
  Tertiary = "tertiary",
  Inactive = "inactive",
  SwitchColor = "switch-color",
}

const getColor = (color: string) => {
  switch (color) {
    case BtnColor.Primary:
      return "bg-[#1E293B]  dark:bg-[#FAFAFA] hover:bg-[#334155] dark:hover:bg-[#EFF0F6]";
    case BtnColor.PrimaryBlue:
      return "bg-[#24B5FF] dark:bg-[#49C2FF] hover:bg-[#49C2FF]  dark:hover:bg-[#6DCEFF]";
    case BtnColor.AllWhite:
      return "bg-[#FAFAFA] dark:bg-[#FAFAFA] hover:bg-[#EFF0F6]  dark:hover:bg-[#EFF0F6]";
    case BtnColor.Destructive:
      return "bg-[#EC4E37] dark:bg-[#EC4E37] hover:bg-[#C62913]  dark:hover:bg-[#EF6B59]";
    case BtnColor.Tertiary:
      return "bg-[#E2E8F0] dark:bg-[#475569] hover:bg-[#CBD5E1]  dark:hover:bg-[#64748B]";
    case BtnColor.Inactive:
      return "bg-[#E2E8F0] dark:bg-[#475569]";
    case BtnColor.SwitchColor:
      return "bg-[#1E293B] dark:bg-[#49C2FF] hover:bg-[#FAFAFA]  dark:hover:bg-[#FAFAFA]";
    default:
      return "";
  }
};

const BaseButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      type = "button",
      variant = "default",
      color = "primary",
      loading = false,
      classNames,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "h-10 w-fit px-4 py-2 rounded-md flex gap-x-2 justify-center items-center text-sm text-nowrap text-[#F8FAFC] dark:text-[#1E293B]";
    const classes = cn(
      baseClasses,
      classNames,
      getColor(color),
      getVariantClasses(variant),
      props.disabled
        ? "bg-[#E2E8F0] hover:bg-[#E2E8F0] dark:bg-[#475569] dark:hover:bg-[#475569] text-[#94A3B8] dark:text-[#94A3B8]"
        : ""
    );
    return (
      <button ref={ref} type={type} className={classes} {...props} disabled={loading}>
        {loading && <Spinner size="small" />}
        {children}
      </button>
    );
  }
);

BaseButton.displayName = "BaseButton";

export default BaseButton;
