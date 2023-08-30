import { ReactNode } from "react";

type TProps = {
  visible: boolean;
  children: ReactNode;
};

export const SelectWrapper = ({ visible, children }: TProps) => {
  return (
    <div>
      {visible ? (
        <div className="relative rounded-md border-2 border-themeGray">
          <span
            className="absolute -top-3 left-1/2 flex h-6 
          w-6 -translate-x-1/2 items-center justify-center rounded-full bg-themeGray text-center text-white "
          >
            ✔︎
          </span>
          {children}
        </div>
      ) : (
        <div className="relative rounded-md border-2 border-slate-300">
          <span
            className="absolute -top-3 left-1/2 flex h-6 
          w-6 -translate-x-1/2 items-center justify-center rounded-full bg-slate-300 text-center text-white "
          >
            ✔︎
          </span>
          {children}
        </div>
      )}
    </div>
  );
};
