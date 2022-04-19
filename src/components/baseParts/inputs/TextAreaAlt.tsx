import React, { ChangeEventHandler } from "react";

type TProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  className?: string;
  placeholder?: string;
};

export const TextAreaAlt = ({
  className,
  value,
  onChange,
  placeholder,
}: TProps) => {
  const classes = [
    "py-1",
    "px-3",
    "w-full",
    "rounded-md",
    "border",
    "border-slate-400",
  ];

  return (
    <textarea
      className={`${className ?? ""} ${classes.join(" ")}`}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    ></textarea>
  );
};
