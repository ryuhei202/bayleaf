import React from "react";

type Props = {
  className?: string;
  children?: React.ReactNode;
  variant?: "title" | "subtitle" | "header" | "body";
  color?: "primary" | "secondary" | "strong-gray";
  bold?: boolean;
};

export const Typography = ({
  className,
  children,
  variant,
  color,
  bold,
}: Props) => {
  let classes: string[] = [];

  classes.push(
    (() => {
      switch (variant) {
        case "title":
          return "text-2xl";
        case "header":
          return "text-sm";
        case "body":
          return "text-xs";
        default:
          return "text-base";
      }
    })()
  );

  classes.push(
    (() => {
      switch (color) {
        case "primary":
          return "text-slate-700";
        case "secondary":
          return "text-slate-200";
        case "strong-gray":
          return "text-neutral-800";
        default:
          return "text-current";
      }
    })()
  );

  classes.push(bold ? "font-semibold" : "");

  return (
    <p className={`font-sans ${className} ${classes.join(" ")}`}>{children}</p>
  );
};
