type TProps = {
  readonly checked?: boolean;
  readonly onChange: () => void;
  readonly children: React.ReactNode;
  readonly className?: string;
};

export const CheckBox = ({
  checked,
  onChange,
  children,
  className,
}: TProps) => {
  return (
    <div className={`text-themeGray ${className ?? ""}`}>
      <label className="flex flex-row items-center justify-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="form-checkbox text-themeGray rounded-md"
        />
        <span className="text-sm ml-2">{children}</span>
      </label>
    </div>
  );
};
