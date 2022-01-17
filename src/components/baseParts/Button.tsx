import React from "react";
import { Typography } from "./Typography";

type Props = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "default" | "primary";
  disabled?: boolean;
  disableElevation?: boolean;
  size?: "small" | "medium";
  radius?: "small" | "large";
};

export const Button = ({
  children,
  className,
  onClick,
  variant,
  disabled,
  disableElevation,
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
        default:
          return "py-3";
      }
    })()
  );

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

  if (typeof children === "string") {
    children = <Typography>{children}</Typography>;
  }

  return (
    <button className={`${className} ${classes.join(" ")}`} onClick={onClick}>
      {children}
    </button>
  );
};
