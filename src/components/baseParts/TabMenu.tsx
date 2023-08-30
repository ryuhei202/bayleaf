import { Tab } from "@headlessui/react";
import { Fragment } from "react";

type TProps = {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly onChangeIsConfirm?: () => void;
};
export const TabMenu = ({ children, className, onChangeIsConfirm }: TProps) => {
  return (
    <Tab as={Fragment}>
      {({ selected }) => (
        <div
          className={`flex w-full items-center justify-center bg-clay px-1 pt-5 ${
            selected
              ? "border-b-2 border-themeGray"
              : "border-b border-[#C7C9C4]"
          } ${className}`}
          onClick={onChangeIsConfirm}
        >
          <p className={`my-3 ${selected ? "opacity-100" : "opacity-20"}`}>
            {children}
          </p>
        </div>
      )}
    </Tab>
  );
};
