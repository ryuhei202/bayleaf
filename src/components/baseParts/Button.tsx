import React from "react";
import { analyzeEvent, TGAEvent } from "../../lib/gtag";

type Props = {
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: "default" | "light" | "line";
  disabled?: boolean;
  disableElevation?: boolean;
  size?: "small" | "medium" | "large" | "none";
  radius?: "small" | "large";
  isLoading?: boolean;
  GAEvent?: TGAEvent;
  dataTestId?: string;
};

export const Button = ({
  children,
  className,
  onClick,
  variant,
  disabled,
  disableElevation = true,
  size,
  radius,
  isLoading,
  GAEvent,
  dataTestId,
}: Props) => {
  let classes: string[] = [
    "px-3",
    "w-full",
    "font-medium",
    "text-base",
    "relative",
  ];
  let spanClasses: string[] = [];

  classes.push(
    (() => {
      switch (radius) {
        case "small":
          return "rounded-md";
        case "large":
          return "rounded-full";
        default:
          return "rounded-full";
      }
    })()
  );

  classes.push(
    (() => {
      switch (size) {
        case "none":
          return "py-0";
        case "large":
          return "py-5";
        case "small":
          return "py-2";
        case "medium":
        default:
          return "py-3";
      }
    })()
  );
  spanClasses.push(isLoading ? "opacity-40" : "");

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
    classes.push("bg-[#C7C9C4] text-clay shadow-none");
  } else {
    classes.push(
      (() => {
        switch (variant) {
          case "light":
            return "bg-white text-themeGray fill-white";
          case "line":
            return "text-themeGray border border-[#C8C9C3] border-[2px]";
          case "default":
          default:
            return "bg-themeGray text-white shadow-themeGray/40 fill-themeGray";
        }
      })()
    );

    classes.push(
      variant === "line" || disableElevation ? "shadow-none" : "shadow-md"
    );
  }

  return (
    <button
      className={`${className ?? ""} ${classes.join(" ")}`}
      onClick={handleClick}
      data-testid={dataTestId}
    >
      <span className={`text-sm ${spanClasses.join(" ")}`}>{children}</span>

      {isLoading ? (
        <div className="absolute inset-0 z-10 flex items-center justify-center"></div>
      ) : (
        <></>
      )}
    </button>
  );
};
