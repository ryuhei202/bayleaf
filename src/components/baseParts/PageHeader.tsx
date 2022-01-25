import React from "react";
import { Typography } from "./Typography";

type Props = {
  title: React.ReactNode;
  subtitle?: string;
  className?: string;
};

export const PageHeader = ({ title, subtitle, className }: Props) => {
  return (
    <div className={`${className} mt-8`}>
      <Typography
        variant="title"
        color="primary"
        bold
        className="leading-9 mb-2"
      >
        {title}
      </Typography>
      {subtitle ? (
        <Typography variant="subtitle" color="primary" bold>
          {subtitle}
        </Typography>
      ) : (
        <></>
      )}
    </div>
  );
};