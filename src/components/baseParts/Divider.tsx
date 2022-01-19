type Props = {
  className?: string;
};

export const Divider = ({ className }: Props) => {
  return <hr className={`${className ?? ""} text-slate-200 w-full`} />;
};
