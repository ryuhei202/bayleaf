import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

export const Paper = ({ children, className }: Props) => {
  return (
    <div
      className={`${
        className ?? ""
      } h-fit w-full rounded-lg bg-white px-3 py-6`}
    >
      {children}
    </div>
  );
};
