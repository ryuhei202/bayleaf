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
          className="form-checkbox rounded-md text-themeGray"
        />
        <span className="ml-2 text-sm">{children}</span>
      </label>
    </div>
  );
};
