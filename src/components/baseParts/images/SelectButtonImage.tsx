import { ImageAlt } from "./ImageAlt";

type TProps = {
  imageSrc: string;
  value: string;
  onChange: () => void;
  className?: string;
};
export const SelectButtonImage = ({
  imageSrc,
  value,
  onChange,
  className,
}: TProps) => {
  return (
    <div className={`w-full relative ${className ?? ""}`}>
      <input
        type="checkbox"
        className="form-checkbox absolute right-1.5 bottom-1.5 rounded-full text-gray-600 focus:outline-none h-5 w-5"
        value={value}
        onChange={onChange}
      />
      <ImageAlt imageSrc={imageSrc} />
    </div>
  );
};
