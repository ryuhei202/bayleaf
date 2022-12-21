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
      className={`underline underline-offset-2 text-themeGray ${
        className ?? ""
      }`}
    >
      <div className="flex items-center font-light">
        {children}
        <img src={ARROW} alt="arrow" className="ml-1 w-4 h-4" />
      </div>
    </a>
  );
};
