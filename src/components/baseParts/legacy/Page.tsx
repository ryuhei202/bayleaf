import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

export const Page = ({ children, className }: Props) => {
  return (
    <div className={`overflow-auto h-screen bg-clay ${className ?? ""}`}>
      {children}
    </div>
  );
};
