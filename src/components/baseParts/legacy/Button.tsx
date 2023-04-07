import React from "react";
import { analyzeEvent, TGAEvent } from "../../../lib/gtag";

type Props = {
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: "default" | "primary" | "text";
  disabled?: boolean;
  disableElevation?: boolean;
  border?: boolean;
  size?: "small" | "medium" | "large" | "none";
  radius?: "small" | "large";
  isLoading?: boolean;
  GAEvent?: TGAEvent;
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
  isLoading,
  GAEvent,
}: Props) => {
  let classes: string[] = [
    "px-3",
    "w-full",
    "font-medium",
    "text-base",
    "relative",
  ];

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
        case "none":
          return "py-0";
        case "large":
          return "py-4";
        case "small":
          return "py-2";
        case "medium":
        default:
          return "py-3";
      }
    })()
  );

  classes.push(border ? "border border-slate-700" : "");

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (onClick === undefined || isLoading || disabled) return;
    if (GAEvent !== undefined) {
      analyzeEvent(GAEvent);
    }
    onClick(event);
  };

  if (disabled) {
    classes.push("bg-neutral-300 text-neutral-500 shadow-none");
  } else {
    classes.push(
      (() => {
        switch (variant) {
          case "primary":
            return "bg-themeGray text-slate-200 shadow-themeGray/40 fill-themeGray";
          case "text":
            return "text-themeGray";
          case "default":
          default:
            return "bg-white text-themeGray fill-white";
        }
      })()
    );

    classes.push(
      variant === "text" || disableElevation ? "shadow-none" : "shadow-md"
    );
  }

  return (
    <button
      className={`${className ?? ""} ${classes.join(" ")}`}
      onClick={handleClick}
    >
      <span className={isLoading ? "opacity-40" : ""}>{children}</span>

      {isLoading ? (
        <div className="absolute flex justify-center items-center inset-0"></div>
      ) : (
        <></>
      )}
    </button>
  );
};
