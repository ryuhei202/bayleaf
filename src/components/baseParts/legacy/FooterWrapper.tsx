type Props = {
  children?: React.ReactNode;
  className?: string;
};

export const FooterWrapper = ({ children, className }: Props) => {
  return (
    <div
      className={`sticky bottom-0 space-y-3 bg-[#F6F6F6] ${className ?? ""}`}
    >
      {children}
    </div>
  );
};
