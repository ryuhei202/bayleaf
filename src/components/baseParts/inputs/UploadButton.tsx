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
      <label htmlFor="upload-button">
        {uploadType === "snap" ? (
          <input
            id="upload-button"
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            onChange={onChange}
          />
        ) : (
          <input
            id="upload-button"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={onChange}
          />
        )}
        <span className={`${className ?? ""} ${classes.join(" ")}`}>
          {uploadType === "snap" ? "撮影する" : "画像フォルダから選ぶ"}
        </span>
      </label>
    </>
  );
};
