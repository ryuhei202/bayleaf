import React from "react";

type Props = {
  children?: React.ReactNode;
  variant?: "title" | "subtitle" | "header" | "body";
  color?: "primary" | "secondary" | "strong-gray";
  bold?: boolean;
};

export const Typography = ({ children, variant, color, bold }: Props) => {
  const fontSizeClassName = (() => {
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
  })();

  const textColorClassName = (() => {
    switch (color) {
      case "primary":
        return "text-slate-700";
      case "secondary":
        return "text-slate-200";
      case "strong-gray":
        return "text-neutral-800";
      default:
        return "text-slate-700";
    }
  })();

  const boldClassName = bold ? "font-semibold" : "";
  return (
    <p
      className={`font-sans ${boldClassName} ${fontSizeClassName} ${textColorClassName}`}
    >
      {children}
    </p>
  );
};
