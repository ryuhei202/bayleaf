type Props = {
  children?: React.ReactNode;
  className?: string;
  arrowPlacement?: "top" | "top-left" | "top-right" | "bottom";
};

export const SpeechBalloon = ({
  children,
  className,
  arrowPlacement,
}: Props) => {
  const content = (
    <div className="w-full h-fit bg-white rounded-lg px-3 py-3">{children}</div>
  );
  switch (arrowPlacement) {
    case "top-left":
      return (
        <div className={className}>
          <div className="w-0 h-0 border-solid border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-white ml-[15%]" />
          {content}
        </div>
      );
    case "top-right":
      return (
        <div className={className}>
          <div className="w-0 h-0 border-solid border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-white ml-[85%]" />
          {content}
        </div>
      );
    case "bottom":
      return (
        <div className={className}>
          {content}
          <div className="w-0 h-0 border-solid border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white mx-auto" />
        </div>
      );
    default:
      return (
        <div className={className}>
          <div className="w-0 h-0 border-solid border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-white mx-auto" />
          {content}
        </div>
      );
  }
};
