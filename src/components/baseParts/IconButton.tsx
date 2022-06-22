import React from "react";
import { analyzeEvent, TGAEvent } from "../../lib/gtag";

type Props = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  GAEvent?: TGAEvent;
};

export const IconButton = ({
  children,
  className,
  onClick,
  GAEvent,
}: Props) => {
  const handleClick = () => {
    if (onClick === undefined) return;
    if (GAEvent !== undefined) {
      analyzeEvent(GAEvent);
    }
    onClick();
  };
  return (
    <button
      className={`${className ?? ""} text-slate-700`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
