import { ReactNode } from "react";

type TProps = {
  readonly caption?: ReactNode;
};
export const Loader = ({ caption }: TProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-themeGray">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-themeGray border-t-transparent" />
      {caption && <span className="pt-2 text-center text-sm">{caption}</span>}
    </div>
  );
};
