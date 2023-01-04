type TProps = {
  readonly variant?: "error";
  readonly children?: React.ReactNode;
  readonly className?: string;
};
export const Message = ({ variant, children, className }: TProps) => {
  let variantStyles: string[] = [];
  variantStyles.push(
    (() => {
      switch (variant) {
        case "error":
          return "text-clay bg-red";
        default:
          return "border-2 border-themeGray text-themeGray";
      }
    })()
  );

  return (
    <div
      className={`p-3 text-center text-clay rounded-md  ${variantStyles.join(
        " "
      )} ${className ?? ""}`}
    >
      {children ?? ""}
    </div>
  );
};
