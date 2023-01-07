import { ReactNode } from "react";

type TProps = {
  visible: boolean;
  children: ReactNode;
};

export const ItemCardWrapper = ({ visible, children }: TProps) => {
  return (
    <div>
      {visible ? (
        <div className="border-2 border-themeGray relative rounded-md">
          <span
            className="text-center absolute -top-3 left-1/2 text-white 
          bg-themeGray w-1/4 h-6 flex justify-center items-center rounded-full -translate-x-1/2 "
          >
            ✔︎
          </span>
          {children}
        </div>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};
