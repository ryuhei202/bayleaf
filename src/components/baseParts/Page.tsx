import React from "react";

type Props = {
  children?: React.ReactNode;
};

export const Page = ({ children }: Props) => {
  return (
    <div className="overflow-auto h-screen bg-slate-200 px-5">{children}</div>
  );
};
