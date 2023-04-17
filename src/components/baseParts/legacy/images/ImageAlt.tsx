type TProps = {
  imageSrc: string;
  onClick?: () => void;
  className?: string;
};

export const ImageAlt = ({ imageSrc, className, onClick }: TProps) => {
  return (
    <img
      src={imageSrc}
      className={`rounded-md max-h-full max-w-full ${className ?? ""}`}
      onClick={onClick}
      alt=""
    />
  );
};
