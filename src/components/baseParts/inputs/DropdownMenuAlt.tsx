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
  const classes = [
    "py-1",
    "px-2",
    "w-full",
    "rounded",
    "bg-slate-200",
    "border-solid",
    "border-2",
    "border-gray-600",
    "h-11",
  ];
  return (
    <select
      className={`${className ?? ""} ${classes.join(" ")}`}
      value={value}
      onChange={onChange}
    >
      {placeholder && (
        <option value="" disabled selected style={{ display: "none" }}>
          {placeholder}
        </option>
      )}
      {children}
    </select>
  );
};
