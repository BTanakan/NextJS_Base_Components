import React, { ChangeEvent, FC } from "react";
import BaseInput from "./base/base-input";
import { cn } from "@/lib/utils";
import BaseButton from "./base/base-button";

interface SearchComponentProps {
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  options?: string[];
  onclick: (id: number) => void;
}

const SearchComponent: FC<SearchComponentProps> = ({ value, onChange, options, onclick }) => {
  return (
    <div className={cn("border border-[#24B5FF] dark:border-[#49C2FF] rounded-md")}>
      <BaseInput
        type="text"
        value={value}
        onChange={onChange}
        search={true}
        placeholder="ค้นหาผู้ให้ข้อมูลของคุณ"
      />
      {options &&
        options.map((c, index) => (
          <div className="">
            <BaseButton
              onClick={() => onclick(index)}
              key={index}
              variant="ghost"
              classNames={cn(
                "justify-start w-full",
                index === 0 ? "border-t border-[#FAFAFA] dark:border-[#1E293B]" : ""
              )}
            >
              {c}
            </BaseButton>
          </div>
        ))}
    </div>
  );
};

export default SearchComponent;
