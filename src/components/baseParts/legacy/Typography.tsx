import React from "react";

type Props = {
  className?: string;
  children?: React.ReactNode;
  size?: "2xl" | "xl" | "sm" | "xs" | "base";
  color?: "primary" | "secondary" | "strong-gray" | "gray" | "red";
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
        case "xl":
          return "text-xl";
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
          return "text-themeGray";
        case "secondary":
          return "text-slate-200";
        case "strong-gray":
          return "text-neutral-500";
        case "gray":
          return "text-gray";
        case "red":
          return "text-red";
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
