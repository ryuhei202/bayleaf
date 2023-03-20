type Props = {
  children?: React.ReactNode;
  className?: string;
  arrowPlacement?: "top" | "left" | "right" | "bottom";
};
type TContentProps = {
  children?: React.ReactNode;
  position: string;
  className?: string;
};
const Content = ({ children, position, className }: TContentProps) => {
  return (
    <div className={`${className} m-4`}>
      <div
        className={`${position} w-full h-fit bg-white rounded-lg p-7 relative before:content-[''] 
      before:absolute before:block before:w-0 before:h-0 before:rounded-full
      before:border-l-[12px] before:border-l-white 
      before:border-t-[12px] before:border-t-white 
      before:border-r-[12px] before:border-r-transparent 
      before:border-b-[12px] before:border-b-transparent 
      after:content-[''] after:absolute after:block after:w-0 after:h-0 after:rounded-full 
      after:border-l-[24px] after:border-l-clay
      after:border-t-[24px] after:border-t-clay 
      after:border-r-[24px] after:border-r-transparent 
      after:border-b-[24px] after:border-b-transparent`}
      >
        {children}
      </div>
    </div>
  );
};

export const SpeechBalloon = ({
  children,
  className,
  arrowPlacement,
}: Props) => {
  switch (arrowPlacement) {
    case "left":
      return (
        <Content
          position="before:-left-3 before:top-8 before:rotate-[-45deg] after:-left-6 after:top-0 after:rotate-[-45deg]"
          className={className}
        >
          {children}
        </Content>
      );
    case "right":
      return (
        <Content
          position="before:-right-3 before:top-8 before:rotate-[135deg] after:-right-6 after:top-0 after:rotate-[135deg]"
          className={className}
        >
          {children}
        </Content>
      );
    case "bottom":
      return (
        <Content
          position="before:left-10 before:-bottom-3 before:rotate-[-135deg] after:left-12 after:-bottom-6 after:rotate-[-135deg]"
          className={className ?? "clay"}
        >
          {children}
        </Content>
      );
    default:
      return (
        <Content
          position="before:left-10 before:-top-3 before:rotate-[45deg] after:left-12 after:-top-6 after:rotate-[45deg]"
          className={className}
        >
          {children}
        </Content>
      );
  }
};
