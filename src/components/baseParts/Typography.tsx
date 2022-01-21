import React from "react";

type Props = {
  className?: string;
  children?: React.ReactNode;
  size?: "2xl" | "sm" | "xs" | "base";
  color?: "primary" | "secondary" | "strong-gray";
  bold?: boolean;
};

export const Typography = ({
  className,
  children,
  size,
  color,
  bold,
}: Props) => {
  let classes: string[] = [];

  classes.push(
    (() => {
      switch (size) {
        case "2xl":
          return "text-2xl";
<<<<<<< HEAD
        case "header":
          return "text-xl";
        case "body":
=======
        case "sm":
          return "text-sm";
        case "xs":
>>>>>>> feature/LEEAP-1955-bayfeaf-typography
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

  classes.push(bold ? "font-semibold" : "");

  return (
    <p className={`font-sans ${className ?? ""} ${classes.join(" ")}`}>
      {children}
    </p>
  );
};
