import React, { useEffect } from "react";
import { Button } from "../Button";

type Props = {
  selected: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  dataTestId?: string;
  onClick?: () => void;
  onSelectTransitionEnd?: () => void;
};

export const SelectButton = ({
  selected,
  children,
  className,
  dataTestId,
  onSelectTransitionEnd,
  ...props
}: Props) => {
  const durationMs = 1000;
  const durationClass = "duration-1000";

  useEffect(() => {
    if (onSelectTransitionEnd !== undefined && selected)
      setTimeout(onSelectTransitionEnd, durationMs);
  }, [selected, onSelectTransitionEnd]);

  return (
    <Button
      className={`${className ?? ""} transition ${durationClass}`}
      variant={selected ? "default" : "light"}
      dataTestId={dataTestId ?? ""}
      {...props}
    >
      {children}
    </Button>
  );
};
