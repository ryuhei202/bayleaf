import React from "react";
import { Typography } from "./Typography";

type Props = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
};

export const PageHeader = ({ title, subtitle, className }: Props) => {
  return (
    <div className={`${className ?? ""} mt-8`}>
      <Typography
        size="2xl"
        color="primary"
        weight="bold"
        className="mb-2 leading-9 xs:text-xl"
      >
        {title}
      </Typography>
      {subtitle ? (
        <Typography size="sm" color="primary" weight="bold">
          {subtitle}
        </Typography>
      ) : (
        <></>
      )}
    </div>
  );
};
