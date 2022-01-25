import React, { useEffect } from "react";
import { Button } from "./Button";

type Props = {
  selected: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  onSelectTransitionEnd?: () => void;
};

export const SelectButton = ({
  selected,
  children,
  className,
  onSelectTransitionEnd,
  ...props
}: Props) => {
  const durationMs = 1000;
  const durationClass = "duration-1000";

  useEffect(() => {
    if (onSelectTransitionEnd !== undefined && selected)
      setTimeout(onSelectTransitionEnd, durationMs);
  }, [selected]);

  return (
    <Button
      className={`${className ?? ""} transition ${durationClass}`}
      variant={selected ? "primary" : "default"}
      {...props}
    >
      {children}
    </Button>
  );
};
