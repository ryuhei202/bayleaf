type TProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  placeholder?: string;
  children?: React.ReactNode;
  className?: string;
};
export const DropdownMenuAlt = ({
  value,
  onChange,
  placeholder,
  children,
  className,
}: TProps) => {
  return (
    <select
      className={`w-full rounded-md border-2 border-solid border-themeGray bg-inherit px-2 py-1 ${
        className ?? ""
      }`}
      value={value}
      onChange={onChange}
    >
      {placeholder && (
        <option value="" disabled style={{ display: "none" }}>
          {placeholder}
        </option>
      )}
      {children}
    </select>
  );
};
