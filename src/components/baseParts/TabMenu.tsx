import { Tab } from "@headlessui/react";
import { Fragment } from "react";

type TProps = {
  readonly children: React.ReactNode;
  readonly className?: string;
};
export const TabMenu = ({ children, className }: TProps) => {
  return (
    <Tab as={Fragment}>
      {({ selected }) => (
        <div
          className={`flex justify-center items-center mx-1 ${
            selected
              ? "border-b-2 border-themeGray"
              : "border-b border-[#C7C9C4]"
          } ${className}`}
        >
          <p className={`my-3 ${selected ? "opacity-100" : "opacity-20"}`}>
            {children}
          </p>
        </div>
      )}
    </Tab>
  );
};
