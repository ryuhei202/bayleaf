import React from "react";

type Props = {
  key?: string;
  children?: React.ReactNode;
  className?: string;
};

export const Page = ({ key, children, className }: Props) => {
  return (
    <div
      key={key}
      className={`overflow-auto h-screen bg-clay ${className ?? ""}`}
    >
      {children}
    </div>
  );
};
