import ARROW from "../../../images/externalLink/linkArrow.svg";

type TProps = {
  readonly children: React.ReactNode;
  readonly href: string;
  readonly className?: string;
};
export const ExternalLink = ({ children, href, className }: TProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`text-themeGray underline underline-offset-2 ${
        className ?? ""
      }`}
    >
      <div className="flex items-center font-light">
        {children}
        <img src={ARROW} alt="arrow" className="ml-1 h-4 w-4" />
      </div>
    </a>
  );
};
