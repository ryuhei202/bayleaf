import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export const IconButton = ({ children, className, ...props }: Props) => {
  return (
    <button className={`${className ?? ""} text-slate-700`} {...props}>
      {children}
    </button>
  );
};
