import React from "react";
import { Typography } from "./Typography";

type Props = {
  title: React.ReactNode;
  subtitle?: string;
  className?: string;
};

export const PageHeader = ({ title, subtitle, className }: Props) => {
  return (
    <div className={`${className ?? ""} mt-8`}>
      <Typography
        size="2xl"
        color="primary"
        weight="bold"
        className="leading-9 mb-2"
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
