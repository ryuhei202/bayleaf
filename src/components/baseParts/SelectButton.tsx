import React, { useEffect, useState } from "react";
import { Button } from "./Button";

type Props = {
  selected: boolean;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  onTransitionEnd?: () => void;
};

export const SelectButton = ({
  selected,
  children,
  className,
  onTransitionEnd,
  onClick,
}: Props) => {
  const durationMs = 2000;
  let classes: string[] = [];

  useEffect(() => {
    onTransitionEnd ? setTimeout(onTransitionEnd, durationMs) : undefined;
  }, [selected]);

  return (
    <Button
      className={`${className ?? ""} transition duration-[${durationMs}ms]`}
      variant={selected ? "primary" : "default"}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
