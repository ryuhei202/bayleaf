type Props = {
  className?: string;
  uploadType?: "select" | "snap";
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export const UploadButton = ({ className, uploadType, onChange }: Props) => {
  const classes: string[] = [
    "block",
    "text-center",
    "w-full",
    "p-3",
    "cursor-pointer",
    "text-base",
    "rounded-xl",
    "bg-midnight",
    "text-slate-200",
    "shadow-midnight/40",
    "fill-midnight",
    "shadow-md",
  ];

  return (
    <>
      {uploadType === "snap" ? (
        <label htmlFor="upload-image-button">
          <input
            id="upload-image-button"
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            onChange={onChange}
          />
          <span className={`${className ?? ""} ${classes.join(" ")}`}>
            撮影する
          </span>
        </label>
      ) : (
        <label htmlFor="capture-image-button">
          <input
            id="capture-image-button"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={onChange}
          />
          <span className={`${className ?? ""} ${classes.join(" ")}`}>
            画像フォルダから選ぶ
          </span>
        </label>
      )}
    </>
  );
};
