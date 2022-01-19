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
      } rounded-lg w-full h-fit px-3 py-6 bg-white`}
    >
      {children}
    </div>
  );
};
