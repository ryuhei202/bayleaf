type TProps = {
  imageSrc: string;
  onClick?: () => void;
  className?: string;
};

export const ImageAlt = ({ imageSrc, className, onClick }: TProps) => {
  return (
    <img
      src={imageSrc}
      className={`rounded-md max-h-full max-w-full w-auto h-auto ${
        className ?? ""
      }`}
      onClick={onClick}
      alt=""
    />
  );
};
