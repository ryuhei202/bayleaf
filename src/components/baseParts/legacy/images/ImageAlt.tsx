type TProps = {
  imageSrc: string;
  onClick?: () => void;
  className?: string;
};

export const ImageAlt = ({ imageSrc, className, onClick }: TProps) => {
  return (
    <img
      src={imageSrc}
      className={`max-h-full max-w-full rounded-md ${className ?? ""}`}
      onClick={onClick}
      alt=""
    />
  );
};
