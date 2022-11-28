import React from "react";
import { Loader } from "semantic-ui-react";
import { analyzeEvent, TGAEvent } from "../../lib/gtag";

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
  spanClasses.push(
    (() => {
      switch (size) {
        case "none":
          return "text-sm";
        case "large":
          return "text-xl";
        case "small":
          return "text-base";
        case "medium":
        default:
          return "text-lg";
      }
    })()
  );
  spanClasses.push(isLoading ? "opacity-40" : "");

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
    classes.push("bg-[#C7C9C4] text-clay shadow-none");
  } else {
    classes.push(
      (() => {
        switch (variant) {
          case "primary":
            return "bg-themeGray text-slate-200 shadow-themeGray/40 fill-themeGray";
          case "text":
            return "text-slate-700";
          case "default":
          default:
            return "bg-white text-slate-700 fill-white";
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
      <span className={`${spanClasses.join(" ")}`}>{children}</span>

      {isLoading ? (
        <div className="absolute flex justify-center items-center inset-0">
          <Loader size="mini" inline active inverted={variant === "primary"} />
        </div>
      ) : (
        <></>
      )}
    </button>
  );
};
