import React from "react";
import { Loader } from "semantic-ui-react";

type Props = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "default" | "primary" | "text";
  disabled?: boolean;
  disableElevation?: boolean;
  border?: boolean;
  size?: "small" | "medium" | "large" | "none";
  radius?: "small" | "large";
  isLoading?: boolean;
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

  if (disabled) {
    onClick = () => {};
    classes.push("bg-neutral-300 text-neutral-500 shadow-none");
  } else {
    classes.push(
      (() => {
        switch (variant) {
          case "primary":
            return "bg-midnight text-slate-200 shadow-midnight/40 fill-midnight";
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
      onClick={isLoading ? () => {} : onClick}
    >
      <span className={isLoading ? "opacity-40" : ""}>{children}</span>

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
