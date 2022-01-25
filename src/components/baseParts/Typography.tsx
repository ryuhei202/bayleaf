import React from "react";

type Props = {
  className?: string;
  children?: React.ReactNode;
  size?: "2xl" | "sm" | "xs" | "base";
  color?: "primary" | "secondary" | "strong-gray";
  weight?: "regular" | "medium" | "bold";
};

export const Typography = ({
  className,
  children,
  size,
  color,
  weight,
}: Props) => {
  let classes: string[] = [];

  classes.push(
    (() => {
      switch (size) {
        case "2xl":
          return "text-2xl";
        case "sm":
          return "text-sm";
        case "xs":
          return "text-xs";
        case "base":
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

  classes.push(
    (() => {
      switch (weight) {
        case "regular":
          return "font-regular";
        case "bold":
          return "font-bold";
        case "medium":
        default:
          return "font-medium";
      }
    })()
  );

  classes.push();

  return (
    <p className={`font-body ${className ?? ""} ${classes.join(" ")}`}>
      {children}
    </p>
  );
};
