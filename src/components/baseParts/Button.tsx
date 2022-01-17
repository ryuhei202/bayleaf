import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "default" | "primary";
  disabled?: boolean;
  disableElevation?: boolean;
  border?: boolean;
  size?: "small" | "medium" | "none";
  radius?: "small" | "large";
};

export const Button = ({
  children,
  className,
  onClick,
  variant,
  disabled,
  disableElevation,
  border,
  size,
  radius,
}: Props) => {
  let classes: string[] = ["px-3", "w-full"];

  classes.push(
    (() => {
      switch (radius) {
        case "small":
          return "rounded-md";
        case "large":
          return "rounded-xl";
        default:
          return "rounded-xl";
      }
    })()
  );

  classes.push(
    (() => {
      switch (size) {
        case "medium":
          return "py-4";
        case "small":
          return "py-3";
        case "none":
          return "py-0";
        default:
          return "py-3";
      }
    })()
  );

  classes.push(border ? "border border-slate-700" : "");

  if (disabled) {
    onClick = () => {};
    classes.push("bg-neutral-300 text-neutral-500 shadow-none");
  } else {
    classes.push(
      (() => {
        switch (variant) {
          case "primary":
            return "bg-midnight text-slate-200 shadow-midnight";
          default:
            return "bg-white text-slate-700 shadow-slate-200";
        }
      })()
    );
    classes.push(disableElevation ? "shadow-none" : "shadow-md");
  }

  return (
    <button
      className={`${className ?? ""} ${classes.join(" ")}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
