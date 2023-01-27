import { ReactNode } from "react";

type TProps = {
  visible: boolean;
  children: ReactNode;
};

export const SelectWrapper = ({ visible, children }: TProps) => {
  return (
    <div>
      {visible ? (
        <div className="border-2 border-themeGray relative rounded-md">
          <span
            className="text-center absolute -top-3 left-1/2 text-white 
          bg-themeGray w-6 h-6 flex justify-center items-center rounded-full -translate-x-1/2 "
          >
            ✔︎
          </span>
          {children}
        </div>
      ) : (
        <div className="border-2 border-slate-300 relative rounded-md">
          <span
            className="text-center absolute -top-3 left-1/2 text-white 
          bg-slate-300 w-6 h-6 flex justify-center items-center rounded-full -translate-x-1/2 "
          >
            ✔︎
          </span>
          {children}
        </div>
      )}
    </div>
  );
};
