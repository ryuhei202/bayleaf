type Props = {
  children?: React.ReactNode;
  className?: string;
};

export const FooterWrapper = ({ children, className }: Props) => {
  return (
    <div className={`sticky bottom-0 bg-white space-y-3 ${className ?? ""}`}>
      {children}
    </div>
  );
};
